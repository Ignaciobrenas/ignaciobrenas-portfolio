import React, { useEffect, useRef } from 'react'

export const MatrixRainCanvas: React.FC<{ opacity?: number }> = ({ opacity = 0.35 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネハヒフヘホマミムメモヤユラリルレワ101010100101XYZ{}[]<>=/+'
    const charArray = chars.split('')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50))

    let lastDraw = 0
    const fps = 28
    const interval = 1000 / fps

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw)

      const elapsed = currentTime - lastDraw
      if (elapsed < interval) return
      lastDraw = currentTime - (elapsed % interval)

      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ff66'
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Lead char is brighter
        if (Math.random() > 0.85) {
          ctx.fillStyle = '#ffffff'
        } else if (Math.random() > 0.6) {
          ctx.fillStyle = '#38bdf8'
        } else {
          ctx.fillStyle = '#00ff66'
        }

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    animationFrameId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity }}
    />
  )
}
