import { atom } from 'jotai'
import {
  ballXAtom,
  ballYAtom,
  speedXAtom,
  speedYAtom,
  playerMovedAtom,
  paddleContactAtom,
} from '../primitive-atoms'

export const ballMoveAtom = atom(null, (get, set) => {
  const speedX = get(speedXAtom)
  const speedY = get(speedYAtom)
  const playerMoved = get(playerMovedAtom)
  const paddleContact = get(paddleContactAtom)

  set(ballYAtom, (prev) => prev - speedY)

  if (playerMoved && paddleContact) {
    set(ballXAtom, (prev) => prev + speedX)
  }
})
