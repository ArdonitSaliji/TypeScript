import { tileIsOccupied, tileIsEmptyOrOccupiedByOpponent } from './GeneralRules'
import { samePosition } from '../../Constants'
export const queenMove = (initialPosition, desiredPosition, team, boardState) => {
  for (let i = 1; i < 8; i++) {
    // straight moves
    let multiplierX =
      desiredPosition.x < initialPosition.x ? -1 : desiredPosition.x > initialPosition.x ? 1 : 0

    // diagonal moves
    let multiplierY =
      desiredPosition.y < initialPosition.y ? -1 : desiredPosition.y > initialPosition.y ? 1 : 0

    let passedPosition = {
      x: initialPosition.x + i * multiplierX,
      y: initialPosition.y + i * multiplierY,
    }

    if (samePosition(passedPosition, desiredPosition)) {
      if (tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
        return true
      }
    } else {
      if (tileIsOccupied(passedPosition, boardState)) {
        break
      }
    }
  }
  return false
}
