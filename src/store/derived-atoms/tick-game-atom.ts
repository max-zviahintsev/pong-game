import { atom } from 'jotai'
import { ballMoveAtom } from './ball-move'

export const tickGameAtom = atom(null, (get, set) => {
  set(ballMoveAtom)
})
