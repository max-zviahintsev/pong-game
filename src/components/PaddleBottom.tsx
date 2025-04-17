import { Rect } from 'react-konva'
import useCursorPosition from '../hooks/useCursorPosition'
import { PADDLE_BOTTOM_Y, PADDLE_WIDTH, PADDLE_HEIGHT } from '../shared/constants'

function PaddleBottom() {
  const paddleBottomX = useCursorPosition()

  return (
    <Rect
      id='paddle-bottom'
      x={paddleBottomX}
      y={PADDLE_BOTTOM_Y}
      width={PADDLE_WIDTH}
      height={PADDLE_HEIGHT}
      fill='white'
    />
  )
}

export default PaddleBottom
