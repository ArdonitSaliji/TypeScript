import React from 'react'
import './Chessboard.css'
import Tile from '../Tile/Tile'
import Referee from '../../referee/referee'
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
export var TeamType
;(function (TeamType) {
  TeamType[(TeamType['OPPONENT'] = 0)] = 'OPPONENT'
  TeamType[(TeamType['OUR'] = 1)] = 'OUR'
})(TeamType || (TeamType = {}))

export var PieceType
;(function (PieceType) {
  PieceType[(PieceType['PAWN'] = 0)] = 'PAWN'
  PieceType[(PieceType['BISHOP'] = 1)] = 'BISHOP'
  PieceType[(PieceType['KNIGHT'] = 2)] = 'KNIGHT'
  PieceType[(PieceType['ROOK'] = 3)] = 'ROOK'
  PieceType[(PieceType['QUEEN'] = 4)] = 'QUEEN'
  PieceType[(PieceType['KING'] = 5)] = 'KING'
})(PieceType || (PieceType = {}))

export const Piece = {
  image: '',
  x: '',
  y: '',
  type: PieceType,
  team: TeamType,
}

const initialBoardState = []

for (let p = 0; p < 2; p++) {
  const teamType = p === 0 ? TeamType.OPPONENT : TeamType.OUR
  const type = teamType === TeamType.OPPONENT ? 'b' : 'w'
  const y = teamType === TeamType.OPPONENT ? 7 : 0
  initialBoardState.push({
    image: `images/rook_${type}.png`,
    x: 0,
    y,
    type: PieceType.ROOK,
    team: teamType,
  })
  initialBoardState.push({
    image: `images/rook_${type}.png`,
    x: 7,
    y,
    type: PieceType.ROOK,
    team: teamType,
  })
  initialBoardState.push({
    image: `images/knight_${type}.png`,
    x: 1,
    y,
    type: PieceType.KNIGHT,
    team: teamType,
  })
  initialBoardState.push({
    image: `images/knight_${type}.png`,
    x: 6,
    y,
    type: PieceType.KNIGHT,
    team: teamType,
  })
  initialBoardState.push({
    image: `images/bishop_${type}.png`,
    x: 5,
    y,
    type: PieceType.BISHOP,
    team: teamType,
  })
  initialBoardState.push({
    image: `images/bishop_${type}.png`,
    x: 2,
    y,
    type: PieceType.BISHOP,
    team: teamType,
  })
  initialBoardState.push({
    image: `images/queen_${type}.png`,
    x: 3,
    y,
    type: PieceType.QUEEN,
    team: teamType,
  })
  initialBoardState.push({
    image: `images/king_${type}.png`,
    x: 4,
    y,
    type: PieceType.KING,
    team: teamType,
  })
}
for (let i = 0; i < 8; i++) {
  initialBoardState.push({
    image: 'images/pawn_b.png',
    x: i,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  })
}
for (let i = 0; i < 8; i++) {
  initialBoardState.push({
    image: 'images/pawn_w.png',
    x: i,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.OUR,
  })
}

const Chessboard = () => {
  const [activePiece, setActivePiece] = React.useState(null)
  const [gridX, setGridX] = React.useState(0)
  const [gridY, setGridY] = React.useState(0)
  const chessboardRef = React.useRef(null)
  const [pieces, setPiece] = React.useState(initialBoardState)
  const referee = new Referee()
  const grabPiece = (e) => {
    const element = e.target
    const chessboard = chessboardRef.current

    if (element.classList.contains('chess-piece') && chessboard) {
      setGridX(Math.floor((e.clientX - chessboard.offsetLeft) / 100))
      setGridY(Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100)))
      const x = e.clientX - 50
      const y = e.clientY - 50
      element.style.position = 'absolute'
      element.style.left = `${x}px`
      element.style.top = `${y}px`

      setActivePiece(element)
    }
  }

  const movePiece = (e) => {
    const chessboard = chessboardRef.current
    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft - 25
      const minY = chessboard.offsetTop - 25
      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75
      const maxY = chessboard.offsetTop + chessboard.clientHeight - 75
      const x = e.clientX - 50
      const y = e.clientY - 50
      activePiece.style.position = 'absolute'

      if (x < minX) {
        activePiece.style.left = `${minX}px`
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`
      } else {
        activePiece.style.left = `${x}px`
      }
      if (y < minY) {
        activePiece.style.top = `${minY}px`
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`
      } else {
        activePiece.style.top = `${y}px`
      }
    }
  }

  const dropPiece = (e) => {
    const chessboard = chessboardRef.current
    if (activePiece && chessboard) {
      const x = Math.floor((e.clientX - chessboard.offsetLeft) / 100)
      const y = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100))

      // updates
      setPiece((value) => {
        const pieces = value.map((p) => {
          if (p.x === gridX && p.y === gridY) {
            const validMove = referee.isValidMove(gridX, gridY, x, y, p.type, p.team, value)

            if (validMove) {
              p.x = x
              p.y = y
            } else {
              activePiece.style.position = 'relative'
              activePiece.style.removeProperty('top')
              activePiece.style.removeProperty('left')
            }
          }
          return p
        })
        return pieces
      })
      setActivePiece(null)
    }
  }
  let board = []
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2
      let image = undefined
      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image
        }
      })

      board.push(<Tile key={`${j}, ${i}`} number={number} image={image} />)
    }
  }
  return (
    <div
      onMouseUp={(e) => dropPiece(e)}
      onMouseMove={(e) => movePiece(e)}
      onMouseDown={(e) => grabPiece(e)}
      className='chess'
      ref={chessboardRef}
    >
      {board}
    </div>
  )
}
export default Chessboard
