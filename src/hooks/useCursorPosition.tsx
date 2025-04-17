import { useEffect } from 'react'
import { useSetPaddleBottomX, useSetPlayerMovedAtom } from '../store/hooks'
import { CANVAS_WIDTH, PADDLE_WIDTH } from '../shared/constants'

function useCursorPosition() {
  const setPaddleBottomX = useSetPaddleBottomX()
  const setPlayerMovedAtom = useSetPlayerMovedAtom()

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
    setPlayerMovedAtom(true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [setPaddleBottomX, setPlayerMovedAtom])
}

export default useCursorPosition
