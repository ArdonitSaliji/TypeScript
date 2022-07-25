import { tileIsEmptyOrOccupied } from './GeneralRules'

export const knightMove = (initialPosition, desiredPosition, team, boardState) => {
  for (let i = -1; i < 2; i += 2) {
    for (let j = -1; j < 2; j += 2) {
      // Top and bottom side movoment

      if (desiredPosition.y - initialPosition.y === 2 * i) {
        if (desiredPosition.x - initialPosition.x === j) {
          if (tileIsEmptyOrOccupied(desiredPosition, boardState, team)) {
            return true
          }
        }
      }
      // right and left side movoment

      if (desiredPosition.x - initialPosition.x === 2 * i) {
        if (desiredPosition.y - initialPosition.y === j) {
          if (tileIsEmptyOrOccupied(desiredPosition, boardState, team)) {
            return true
          }
        }
      }
    }
  }
}
