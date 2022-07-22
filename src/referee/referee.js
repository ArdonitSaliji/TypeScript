import { PieceType, TeamType, Piece } from '../Constants.js'

class Referee {
  tileIsOccupied(x, y, boardState = Piece) {
    const piece = boardState.find((p) => p.position.x === x && p.position.y === y)
    if (piece) {
      return true
    } else {
      return false
    }
  }
  TileIsOccupiedByOpponent(x, y, boardState, team) {
    const piece = boardState.find(
      (p) => p.position.x === x && p.position.y === y && p.team !== team
    )

    if (piece) {
      return true
    } else {
      return false
    }
  }

  isEnPassantMove(x, y, boardState = Piece, team = TeamType, type = PieceType) {
    const pieceDirection = team === TeamType.OUR ? 1 : -1
    const piece = boardState.find((p) => p.position.x === x && p.position.y === y + pieceDirection)

    if (piece) {
      console.log('en passant')
    } else {
    }
  }

  isValidMove(px, py, x, y, type = PieceType, team = TeamType, boardState = Piece) {
    // Movement logic
    if (type === PieceType.PAWN) {
      const specialRow = team === TeamType.OUR ? 1 : 6
      const pawnDirection = team === TeamType.OUR ? 1 : -1

      if (px === x && py === specialRow && y - py === 2 * pawnDirection) {
        if (
          !this.tileIsOccupied(x, y, boardState) &&
          !this.tileIsOccupied(x, y - pawnDirection, boardState)
        ) {
          return true
        }
      } else if (px === x && y - py === pawnDirection) {
        if (!this.tileIsOccupied(x, y, boardState)) {
          return true
        }
        // Attack logic
      } else if (x - px === -1 && y - py === pawnDirection) {
        if (this.TileIsOccupiedByOpponent(x, y, boardState, team)) {
          return true
        }
      } else if (x - px === 1 && y - py === pawnDirection) {
        if (this.TileIsOccupiedByOpponent(x, y, boardState, team)) {
          return true
        }
      }
    }

    return false
  }
}

export default Referee
