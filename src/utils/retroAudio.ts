/**
 * 32-Bit Retro Web Audio synthesizer for character dialogue blips.
 * Synthesizes retro bleeps with zero external assets, zero latency, and safe unlock.
 */

class RetroSoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private lastBlipTime: number = 0;
  private hasUserInteracted: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('retro_sound_muted');
      if (saved !== null) {
        this.isMuted = saved === 'true';
      }
      const unlock = () => {
        this.hasUserInteracted = true;
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
      };
      window.addEventListener('pointerdown', unlock, { once: true, passive: true });
      window.addEventListener('keydown', unlock, { once: true, passive: true });
    }
  }

  private initContext() {
    if (typeof window === 'undefined' || !this.hasUserInteracted) return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('retro_sound_muted', String(this.isMuted));
    }
    return this.isMuted;
  }

  public playBlip(pitchOffset = 0) {
    if (this.isMuted) return;

    const now = performance.now();
    // Throttle blips to prevent audio overload
    if (now - this.lastBlipTime < 45) return;
    this.lastBlipTime = now;

    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // 32-bit retro square/triangle timbre
      osc.type = 'triangle';
      
      // Base frequency around 220Hz (comfortable male voice timbre), slight variation for organic feel
      const baseFreq = 210 + pitchOffset + (Math.random() * 14 - 7);
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.92, ctx.currentTime + 0.04);

      // Soft volume envelope
      gain.gain.setValueAtTime(0.065, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.038);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // AudioContext failure safely ignored
    }
  }

  public playChime() {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      [440, 554, 659].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.04, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.15);
      });
    } catch {
      // AudioContext failure safely ignored
    }
  }
}

export const retroAudio = new RetroSoundEngine();
export const undertaleAudio = retroAudio; // backward compatibility alias
