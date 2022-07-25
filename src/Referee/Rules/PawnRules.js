import { TeamType } from '../../Constants'
import { tileIsOccupied, tileIsOccupiedByOpponent } from './GeneralRules'
export const pawnMove = (initialPosition, desiredPosition, team, boardState) => {
  const specialRow = team === TeamType.OUR ? 1 : 6
  const pawnDirection = team === TeamType.OUR ? 1 : -1

  // Movement logic
  if (
    initialPosition.x === desiredPosition.x &&
    initialPosition.y === specialRow &&
    desiredPosition.y - initialPosition.y === 2 * pawnDirection
  ) {
    if (
      !tileIsOccupied(desiredPosition, boardState) &&
      !tileIsOccupied({ x: desiredPosition.x, y: desiredPosition.y - pawnDirection }, boardState)
    ) {
      return true
    }
  } else if (
    initialPosition.x === desiredPosition.x &&
    desiredPosition.y - initialPosition.y === pawnDirection
  ) {
    if (!tileIsOccupied(desiredPosition, boardState)) {
      return true
    }
    // Attack logic
  } else if (
    desiredPosition.x - initialPosition.x === -1 &&
    desiredPosition.y - initialPosition.y === pawnDirection
  ) {
    if (tileIsOccupiedByOpponent(desiredPosition, boardState, team)) {
      return true
    }
  } else if (
    desiredPosition.x - initialPosition.x === 1 &&
    desiredPosition.y - initialPosition.y === pawnDirection
  ) {
    if (tileIsOccupiedByOpponent(desiredPosition, boardState, team)) {
      return true
    }
  }
  return false
}
