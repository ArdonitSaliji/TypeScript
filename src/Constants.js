export const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8']
export const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
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
export const Position = {
  x: '',
  y: '',
}
export const Piece = {
  image: '',
  position: Position,
  type: PieceType,
  team: TeamType,
}

export const initialBoardState = [
  {
    image: `images/rook_b.png`,
    position: {
      x: 0,
      y: 7,
    },
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/knight_b.png`,
    position: {
      x: 1,
      y: 7,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/bishop_b.png`,
    position: {
      x: 2,
      y: 7,
    },
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/queen_b.png`,
    position: {
      x: 3,
      y: 7,
    },
    type: PieceType.QUEEN,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/king_b.png`,
    position: {
      x: 4,
      y: 7,
    },
    type: PieceType.KING,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/bishop_b.png`,
    position: {
      x: 5,
      y: 7,
    },
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/knight_b.png`,
    position: {
      x: 6,
      y: 7,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/rook_b.png`,
    position: {
      x: 7,
      y: 7,
    },
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/pawn_b.png`,
    position: {
      x: 0,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/pawn_b.png`,
    position: {
      x: 1,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/pawn_b.png`,
    position: {
      x: 2,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/pawn_b.png`,
    position: {
      x: 3,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/pawn_b.png`,
    position: {
      x: 4,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/pawn_b.png`,
    position: {
      x: 5,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/pawn_b.png`,
    position: {
      x: 6,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `images/pawn_b.png`,
    position: {
      x: 7,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },

  {
    image: `images/rook_w.png`,
    position: {
      x: 0,
      y: 0,
    },
    type: PieceType.ROOK,
    team: TeamType.OUR,
  },
  {
    image: `images/knight_w.png`,
    position: {
      x: 1,
      y: 0,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
  {
    image: `images/bishop_w.png`,
    position: {
      x: 2,
      y: 0,
    },
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    image: `images/queen_w.png`,
    position: {
      x: 3,
      y: 0,
    },
    type: PieceType.QUEEN,
    team: TeamType.OUR,
  },
  {
    image: `images/king_w.png`,
    position: {
      x: 4,
      y: 0,
    },
    type: PieceType.KING,
    team: TeamType.OUR,
  },
  {
    image: `images/bishop_w.png`,
    position: {
      x: 5,
      y: 0,
    },
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    image: `images/knight_w.png`,
    position: {
      x: 6,
      y: 0,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
  {
    image: `images/rook_w.png`,
    position: {
      x: 7,
      y: 0,
    },
    type: PieceType.ROOK,
    team: TeamType.OUR,
  },
  {
    image: `images/pawn_w.png`,
    position: {
      x: 0,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `images/pawn_w.png`,
    position: {
      x: 1,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `images/pawn_w.png`,
    position: {
      x: 2,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `images/pawn_w.png`,
    position: {
      x: 3,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `images/pawn_w.png`,
    position: {
      x: 4,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `images/pawn_w.png`,
    position: {
      x: 5,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `images/pawn_w.png`,
    position: {
      x: 6,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `images/pawn_w.png`,
    position: {
      x: 7,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
]
