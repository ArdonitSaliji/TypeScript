/* eslint-disable default-case */
import { PieceType, TeamType } from '../../Constants.js'
import { bishopMove } from './BishopRules.js'
import { kingMove } from './KingRules.js'
import { knightMove } from './KnightRules.js'
import { pawnMove } from './PawnRules.js'
import { queenMove } from './QueenRules.js'
import { rookMove } from './RookRules.js'

class Referee {
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

  isValidMove(initialPosition, desiredPosition, type, team, boardState) {
    let validMove = false

    switch (type) {
      case PieceType.PAWN:
        validMove = pawnMove(initialPosition, desiredPosition, team, boardState)
        break
      case PieceType.KNIGHT:
        validMove = knightMove(initialPosition, desiredPosition, team, boardState)
        break
      case PieceType.BISHOP:
        validMove = bishopMove(initialPosition, desiredPosition, team, boardState)
        break
      case PieceType.ROOK:
        validMove = rookMove(initialPosition, desiredPosition, team, boardState)
        break
      case PieceType.QUEEN:
        validMove = queenMove(initialPosition, desiredPosition, team, boardState)
        break
      case PieceType.KING:
        validMove = kingMove(initialPosition, desiredPosition, team, boardState)
    }
    return validMove
  }
}

export default Referee
