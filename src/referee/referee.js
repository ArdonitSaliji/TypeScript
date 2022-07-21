import { PieceType, TeamType, Piece } from '../components/Chessboard/Chessboard'

class Referee {
  tileIsOccupied(x, y, boardState = Piece) {
    console.log('Checking')

    const piece = boardState.find((p) => p.x === x && p.y === y)
    if (piece) {
      return true
    } else {
      return false
    }
  }
  isValidMove(px, py, x, y, type = PieceType, team = TeamType, boardState = Piece) {
    console.log('Valid Move')
    console.log(`Previous location: (${px}, ${py})`)
    console.log(`New location: (${x}, ${y})`)
    console.log(`Piece type: (${type})`)
    console.log(`Team: (${team})`)

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
      }
    }

    return false
  }
}

export default Referee
