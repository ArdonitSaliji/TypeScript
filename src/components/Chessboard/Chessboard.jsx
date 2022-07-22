import React from 'react'
import './Chessboard.css'
import Tile from '../Tile/Tile'
import Referee from '../../Referee/Referee'
import {
  verticalAxis,
  horizontalAxis,
  initialBoardState,
  PieceType,
  TeamType,
} from '../../Constants'

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

      const currentPiece = pieces.find((p) => p.position.x === gridX && p.position.y === gridY)
      const attackedPiece = pieces.find((p) => p.position.x === x && p.position.y === y)

      if (currentPiece) {
        const validMove = referee.isValidMove(
          gridX,
          gridY,
          x,
          y,
          currentPiece.type,
          currentPiece.team,
          pieces
        )

        const isEnPassantMove = referee.isEnPassantMove(
          x,
          y,
          pieces,
          currentPiece.team,
          currentPiece.type
        )

        if (validMove) {
          const updatedPieces = pieces.reduce((results, piece) => {
            if (piece.position.x === gridX && piece.position.y === gridY) {
              piece.position.x = x
              piece.position.y = y
              results.push(piece)
            } else if (!(piece.position.x === x && piece.position.y === y)) {
              results.push(piece)
            }
            return results
          }, [])

          setPiece(updatedPieces)
        } else {
          activePiece.style.position = 'relative'
          activePiece.style.removeProperty('top')
          activePiece.style.removeProperty('left')
        }
      }

      setActivePiece(null)
    }
  }
  let board = []
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2
      let image = undefined
      pieces.forEach((p) => {
        if (p.position.x === i && p.position.y === j) {
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
