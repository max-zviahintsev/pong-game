import { useState } from 'react'
import { Stage, Layer, Rect, Line, Circle, Text } from 'react-konva'
import useCursorPosition from './hooks/useCursorPosition'
import * as c from './shared/constants'

function App() {
  const paddleBottomX = useCursorPosition()

  const [ballX, setBallX] = useState(c.CENTER_X)
  const [ballY, setBallY] = useState(c.CENTER_Y)

  const [paddleTopX, setPaddleTopX] = useState(c.PADDLE_DEFAULT_X)

  const [playerScore, setplayerScore] = useState(0)
  const [computerScore, setcomputerScore] = useState(0)

  return (
    <Stage width={c.CANVAS_WIDTH} height={c.CANVAS_HEIGHT} style={{ cursor: 'none' }}>
      <Layer>
        <Rect
          id='background'
          x={0}
          y={0}
          width={c.CANVAS_WIDTH}
          height={c.CANVAS_HEIGHT}
          fill='black'
        />
      </Layer>

      <Layer>
        <Rect
          id='paddle-top'
          x={paddleTopX}
          y={c.PADDLE_TOP_Y}
          width={c.PADDLE_WIDTH}
          height={c.PADDLE_HEIGHT}
          fill='white'
        />

        <Text
          id='computer-score'
          x={20}
          y={c.COMPUTER_SCORE_Y}
          text={computerScore.toString()}
          fontSize={22}
          fontFamily='Courier New'
          fill='white'
        />

        <Line points={c.MIDDLE_LINE} stroke='grey' strokeWidth={2} dash={c.LINE_DASH} />

        <Text
          id='player-score'
          x={20}
          y={c.PLAYER_SCORE_Y}
          text={playerScore.toString()}
          fontSize={22}
          fontFamily='Courier New'
          fill='white'
        />

        <Rect
          id='paddle-bottom'
          x={paddleBottomX}
          y={c.PADDLE_BOTTOM_Y}
          width={c.PADDLE_WIDTH}
          height={c.PADDLE_HEIGHT}
          fill='white'
        />

        <Circle id='ball' x={ballX} y={ballY} radius={c.BALL_RADIUS} fill='white' />
      </Layer>
    </Stage>
  )
}

export default App
