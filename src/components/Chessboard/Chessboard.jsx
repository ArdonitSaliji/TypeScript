import React from 'react'
import './Chessboard.css'
import Tile from '../Tile/Tile'

const Chessboard = () => {
  const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8']
  const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const pieces = [
    {
      image: '',
      x: '',
      y: '',
    },
  ]
  for (let i = 0; i < 8; i++) {
    pieces.push({ image: 'images/pawn_b.png', x: i, y: 6 })
  }
  for (let i = 0; i < 8; i++) {
    pieces.push({ image: 'images/pawn_w.png', x: i, y: 1 })
  }

  pieces.push({ image: 'images/rook_b.png', x: 0, y: 7 })
  pieces.push({ image: 'images/rook_b.png', x: 7, y: 7 })
  pieces.push({ image: 'images/knight_b.png', x: 1, y: 7 })
  pieces.push({ image: 'images/knight_b.png', x: 6, y: 7 })
  pieces.push({ image: 'images/bishop_b.png', x: 5, y: 7 })
  pieces.push({ image: 'images/bishop_b.png', x: 2, y: 7 })
  pieces.push({ image: 'images/queen_b.png', x: 3, y: 7 })
  pieces.push({ image: 'images/king_b.png', x: 4, y: 7 })

  pieces.push({ image: 'images/rook_w.png', x: 0, y: 0 })
  pieces.push({ image: 'images/rook_w.png', x: 7, y: 0 })
  pieces.push({ image: 'images/knight_w.png', x: 1, y: 0 })
  pieces.push({ image: 'images/knight_w.png', x: 6, y: 0 })
  pieces.push({ image: 'images/bishop_w.png', x: 5, y: 0 })
  pieces.push({ image: 'images/bishop_w.png', x: 2, y: 0 })
  pieces.push({ image: 'images/queen_w.png', x: 3, y: 0 })
  pieces.push({ image: 'images/king_w.png', x: 4, y: 0 })

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

      board.push(<Tile number={number} image={image} />)
    }
  }
  return <div className='chess'>{board}</div>
}
export default Chessboard
