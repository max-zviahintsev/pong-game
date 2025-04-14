import { useState } from 'react'
import { Stage, Layer, Rect, Line, Circle, Text } from 'react-konva'

function App() {
  const width = 500
  const height = 700

  const [ballX, setBallX] = useState(250)
  const [ballY, setBallY] = useState(350)

  const [paddleTopX, setPaddleTopX] = useState(225)
  const [paddleBottomX, setPaddleBottomX] = useState(225)

  const [playerScore, setplayerScore] = useState(0)
  const [computerScore, setcomputerScore] = useState(0)

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect id='background' x={0} y={0} width={width} height={height} fill='black' />
      </Layer>

      <Layer>
        <Rect id='paddle-top' x={paddleTopX} y={10} width={50} height={10} fill='white ' />

        <Text
          id='computer-score'
          x={20}
          y={height / 2 - 30}
          text={computerScore.toString()}
          fontSize={22}
          fontFamily='Courier New'
          fill='white'
        />

        <Line points={[0, 350, 500, 350]} stroke='grey' strokeWidth={2} dash={[3, 3]} />

        <Text
          id='player-score'
          x={20}
          y={height / 2 + 10}
          text={playerScore.toString()}
          fontSize={22}
          fontFamily='Courier New'
          fill='white'
        />

        <Rect
          id='paddle-bottom'
          x={paddleBottomX}
          y={height - 20}
          width={50}
          height={10}
          fill='white'
        />

        <Circle id='ball' x={ballX} y={ballY} radius={10} fill='white' />
      </Layer>
    </Stage>
  )
}

export default App
