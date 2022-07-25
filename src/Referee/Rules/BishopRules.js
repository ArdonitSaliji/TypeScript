import { tileIsOccupied, tileIsEmptyOrOccupied } from './GeneralRules'
import { samePosition } from '../../Constants'
export const bishopMove = (initialPosition, desiredPosition, team, boardState) => {
  for (let i = 1; i < 8; i++) {
    // up right move
    if (desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y) {
      let passedPosition = { x: initialPosition.x + i, y: initialPosition.y + i }
      if (samePosition(passedPosition, desiredPosition)) {
        if (tileIsEmptyOrOccupied(passedPosition, boardState, team)) {
          return true
        }
      } else {
        if (tileIsOccupied(passedPosition, boardState)) {
          break
        }
      }
    }

    // bottom right move
    if (desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y) {
      let passedPosition = { x: initialPosition.x + i, y: initialPosition.y - i }
      if (samePosition(passedPosition, desiredPosition)) {
        if (tileIsEmptyOrOccupied(passedPosition, boardState, team)) {
          return true
        }
      } else {
        if (tileIsOccupied(passedPosition, boardState)) {
          break
        }
      }
    }

    // bottom left move
    if (desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y) {
      let passedPosition = { x: initialPosition.x - i, y: initialPosition.y - i }
      if (samePosition(passedPosition, desiredPosition)) {
        if (tileIsEmptyOrOccupied(passedPosition, boardState, team)) {
          return true
        }
      } else {
        if (tileIsOccupied(passedPosition, boardState)) {
          break
        }
      }
    }

    if (desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y) {
      let passedPosition = { x: initialPosition.x - i, y: initialPosition.y + i }
      if (samePosition(passedPosition, desiredPosition)) {
        if (tileIsEmptyOrOccupied(passedPosition, boardState, team)) {
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
