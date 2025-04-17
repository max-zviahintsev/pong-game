import { Stage, Layer, Rect, Line } from 'react-konva'
import { useGameLoop } from './hooks/useGameLoop'
import * as c from './shared/constants'
import Ball from './components/Ball'
import PaddleTop from './components/PaddleTop'
import PaddleBottom from './components/PaddleBottom'
import ComputerScore from './components/ComputerScore'
import PlayerScore from './components/PlayerScore'

function App() {
  useGameLoop()

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
        <PaddleTop />

        <ComputerScore />

        <Line points={c.MIDDLE_LINE} stroke='grey' strokeWidth={2} dash={c.LINE_DASH} />

        <PlayerScore />

        <PaddleBottom />

        <Ball />
      </Layer>
    </Stage>
  )
}

export default App
