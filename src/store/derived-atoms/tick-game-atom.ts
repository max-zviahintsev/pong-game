import { atom } from 'jotai'
import { ballMoveAtom } from './ball-actions-atoms'
import { ballBoundariesAtom } from './ball-boundaries-atom'

export const tickGameAtom = atom(null, (get, set) => {
  set(ballMoveAtom)
  set(ballBoundariesAtom)
})
