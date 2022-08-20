import React from 'react'
import ReactDOM from 'react-dom/client'
import Chessboard from './components/Chessboard/Chessboard'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Chessboard />
  </React.StrictMode>
)
