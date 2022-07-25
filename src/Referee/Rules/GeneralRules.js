import { samePosition } from '../../Constants'
export const tileIsOccupied = (position, boardState) => {
  const piece = boardState.find((p) => samePosition(p.position, position))
  if (piece) {
    return true
  } else {
    return false
  }
}
export const tileIsOccupiedByOpponent = (position, boardState, team) => {
  const piece = boardState.find((p) => samePosition(p.position, position) && p.team !== team)

  if (piece) {
    return true
  } else {
    return false
  }
}
export const tileIsEmptyOrOccupied = (position, boardState, team) => {
  return (
    !tileIsOccupied(position, boardState) || tileIsOccupiedByOpponent(position, boardState, team)
  )
}
