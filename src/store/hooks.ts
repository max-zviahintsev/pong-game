import { useAtomValue, useSetAtom } from 'jotai'
import {
  ballXAtom,
  ballYAtom,
  paddleTopXAtom,
  paddleBottomXAtom,
  computerScoreAtom,
  playerScoreAtom,
  playerMovedAtom,
} from './primitive-atoms'

export const useBallX = () => useAtomValue(ballXAtom)
export const useBallY = () => useAtomValue(ballYAtom)

export const usePaddleTopX = () => useAtomValue(paddleTopXAtom)
export const usePaddleBottomX = () => useAtomValue(paddleBottomXAtom)

export const useSetPaddleBottomX = () => useSetAtom(paddleBottomXAtom)
export const useSetPlayerMovedAtom = () => useSetAtom(playerMovedAtom)

export const useComputerScore = () => useAtomValue(computerScoreAtom)
export const usePlayerScore = () => useAtomValue(playerScoreAtom)
