import { Stage, Layer, Rect, Line } from 'react-konva'
import { useGameLoop } from './hooks/useGameLoop'
import useCursorPosition from './hooks/useCursorPosition'
import { CANVAS_WIDTH, CANVAS_HEIGHT, MIDDLE_LINE, LINE_DASH } from './shared/constants'
import Ball from './components/Ball'
import PaddleTop from './components/PaddleTop'
import PaddleBottom from './components/PaddleBottom'
import ComputerScore from './components/ComputerScore'
import PlayerScore from './components/PlayerScore'

function App() {
  useGameLoop()
  useCursorPosition()

  return (
    <Stage width={CANVAS_WIDTH} height={CANVAS_HEIGHT} style={{ cursor: 'none' }}>
      <Layer>
        <Rect
          id='background'
          x={0}
          y={0}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          fill='black'
        />
      </Layer>

      <Layer>
        <PaddleTop />

        <ComputerScore />

        <Line points={MIDDLE_LINE} stroke='grey' strokeWidth={2} dash={LINE_DASH} />

        <PlayerScore />

        <PaddleBottom />

        <Ball />
      </Layer>
    </Stage>
  )
}

export default App
