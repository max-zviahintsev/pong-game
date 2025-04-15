import { useState, useEffect } from 'react'
import { PADDLE_DEFAULT_X, CANVAS_WIDTH, PADDLE_WIDTH } from '../shared/constants'

function useCursorPosition() {
  const [paddleBottomX, setPaddleBottomX] = useState(PADDLE_DEFAULT_X)

  function calculateX(cursorX: number) {
    let paddlePosition = cursorX - CANVAS_WIDTH + PADDLE_WIDTH

    switch (true) {
      case paddlePosition < 0:
        paddlePosition = 0
        break
      case paddlePosition > CANVAS_WIDTH - PADDLE_WIDTH:
        paddlePosition = CANVAS_WIDTH - PADDLE_WIDTH
        break
    }
    return paddlePosition
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPaddleBottomX(calculateX(event.clientX))
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return paddleBottomX
}

export default useCursorPosition
