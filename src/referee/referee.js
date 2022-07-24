import { PieceType, samePosition, TeamType } from '../Constants.js'

class Referee {
  tileIsEmptyOrOccupied(position, boardState, team) {
    return (
      !this.tileIsOccupied(position, boardState) ||
      this.tileIsOccupiedByOpponent(position, boardState, team)
    )
  }
  isEnPassantMove(initialPosition, desiredPosition, type, team, boardState) {
    const pawnDirection = team === TeamType.OUR ? 1 : -1

    if (type === PieceType.PAWN) {
      if (
        (desiredPosition.x - initialPosition.x === -1 ||
          desiredPosition.x - initialPosition.x === 1) &&
        desiredPosition.y - initialPosition.y === pawnDirection
      ) {
        const piece = boardState.find(
          (p) =>
            p.position.x === desiredPosition.x &&
            p.position.y === desiredPosition.y - pawnDirection &&
            p.enPassant
        )
        if (piece) {
          return true
        }
      }
    }

    return false
  }

  tileIsOccupied(position, boardState) {
    const piece = boardState.find((p) => samePosition(p.position, position))
    if (piece) {
      return true
    } else {
      return false
    }
  }
  tileIsOccupiedByOpponent(position, boardState, team) {
    const piece = boardState.find((p) => samePosition(p.position, position) && p.team !== team)

    if (piece) {
      return true
    } else {
      return false
    }
  }

  isValidMove(initialPosition, desiredPosition, type, team, boardState) {
    if (type === PieceType.PAWN) {
      const specialRow = team === TeamType.OUR ? 1 : 6
      const pawnDirection = team === TeamType.OUR ? 1 : -1

      // Movement logic
      if (
        initialPosition.x === desiredPosition.x &&
        initialPosition.y === specialRow &&
        desiredPosition.y - initialPosition.y === 2 * pawnDirection
      ) {
        if (
          !this.tileIsOccupied(desiredPosition, boardState) &&
          !this.tileIsOccupied(
            { x: desiredPosition.x, y: desiredPosition.y - pawnDirection },
            boardState
          )
        ) {
          return true
        }
      } else if (
        initialPosition.x === desiredPosition.x &&
        desiredPosition.y - initialPosition.y === pawnDirection
      ) {
        if (!this.tileIsOccupied(desiredPosition, boardState)) {
          return true
        }
        // Attack logic
      } else if (
        desiredPosition.x - initialPosition.x === -1 &&
        desiredPosition.y - initialPosition.y === pawnDirection
      ) {
        if (this.tileIsOccupiedByOpponent(desiredPosition, boardState, team)) {
          return true
        }
      } else if (
        desiredPosition.x - initialPosition.x === 1 &&
        desiredPosition.y - initialPosition.y === pawnDirection
      ) {
        if (this.tileIsOccupiedByOpponent(desiredPosition, boardState, team)) {
          return true
        }
      }
    } else if (type === PieceType.KNIGHT) {
      // Knight moves

      for (let i = -1; i < 2; i += 2) {
        for (let j = -1; j < 2; j += 2) {
          // Top and bottom side movoment

          if (desiredPosition.y - initialPosition.y === 2 * i) {
            if (desiredPosition.x - initialPosition.x === j) {
              if (this.tileIsEmptyOrOccupied(desiredPosition, boardState, team)) {
                return true
              }
              console.log('upper/bottom left/right ')
            }
          }
          // right and left side movoment

          if (desiredPosition.x - initialPosition.x === 2 * i) {
            if (desiredPosition.y - initialPosition.y === j) {
              if (this.tileIsEmptyOrOccupied(desiredPosition, boardState, team)) {
                return true
              }
              console.log('right/left top/bottom')
            }
          }
        }
      }
    } else if (type === PieceType.BISHOP) {
      // Bishop moves

      for (let i = 1; i < 8; i++) {
        // up right move
        if (desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y) {
          let passedPosition = { x: initialPosition.x + i, y: initialPosition.y + i }
          if (this.tileIsOccupied(passedPosition, boardState)) {
            if (this.tileIsOccupiedByOpponent(passedPosition, boardState, team)) {
              return true
            } else {
              break
            }
          }
          if (passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y) {
            return true
          }

          console.log(`moooooovviiiing ${passedPosition.x}, ${passedPosition.y}`)
        }

        // bottom right move
        if (desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y) {
          let passedPosition = { x: initialPosition.x + i, y: initialPosition.y - i }
          if (this.tileIsOccupied(passedPosition, boardState)) {
            break
          }
        }

        if (
          desiredPosition.x - initialPosition.x === i &&
          desiredPosition.y - initialPosition.y === -i
        ) {
          return true
        }

        // bottom left move
        if (desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y) {
          let passedPosition = { x: initialPosition.x - i, y: initialPosition.y - i }
          if (this.tileIsOccupied(passedPosition, boardState)) {
            break
          }
        }
        if (
          desiredPosition.x - initialPosition.x === -i &&
          desiredPosition.y - initialPosition.y === -i
        ) {
          return true
        }

        // up left move
        if (desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y) {
          let passedPosition = { x: initialPosition.x - i, y: initialPosition.y + i }
          if (this.tileIsOccupied(passedPosition, boardState)) {
            break
          }
        }
        if (
          desiredPosition.x - initialPosition.x === -i &&
          desiredPosition.y - initialPosition.y === i
        ) {
          return true
        }
      }
    }
    return false
  }
}

export default Referee
