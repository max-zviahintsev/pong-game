import { useEffect, useRef } from 'react'
import { useSetAtom } from 'jotai'
import { tickGameAtom } from '../store/derived-atoms/tick-game-atom'

export function useGameLoop() {
  const frameRef = useRef<number>(0)
  const tickGame = useSetAtom(tickGameAtom)

  useEffect(() => {
    const animate = () => {
      tickGame()
      frameRef.current = requestAnimationFrame(animate)
    }
    frameRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameRef.current!)
  }, [tickGame])
}
