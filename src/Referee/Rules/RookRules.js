import { tileIsOccupied, tileIsEmptyOrOccupiedByOpponent } from './GeneralRules'
import { samePosition } from '../../Constants'

export const rookMove = (initialPosition, desiredPosition, team, boardState) => {
  if (initialPosition.x === desiredPosition.x) {
    for (let i = 1; i < 8; i++) {
      let multiplier = desiredPosition.y < initialPosition.y ? -1 : 1

      let passedPosition = { x: initialPosition.x, y: initialPosition.y + i * multiplier }
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
  }

  if (initialPosition.y === desiredPosition.y) {
    for (let i = 1; i < 8; i++) {
      let multiplier = desiredPosition.x < initialPosition.x ? -1 : 1
      let passedPosition = { x: initialPosition.x + i * multiplier, y: initialPosition.y }
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
  }
  return false
}
