import { useAtomValue } from 'jotai'
import {
  ballXAtom,
  ballYAtom,
  paddleTopXAtom,
  computerScoreAtom,
  playerScoreAtom,
} from './primitive-atoms'

export const useBallX = () => useAtomValue(ballXAtom)
export const useBallY = () => useAtomValue(ballYAtom)

export const usePaddleTopX = () => useAtomValue(paddleTopXAtom)

export const useComputerScore = () => useAtomValue(computerScoreAtom)
export const usePlayerScore = () => useAtomValue(playerScoreAtom)
