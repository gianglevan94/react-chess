import React, { Component } from 'react'
import classnames from 'classnames'
import './App.scss'

const arr = [...Array(8)]

const ROCK = 'R'
const BISHOP = 'B'
const QUEEN = 'Q'
const KING = 'K'
const KNIGHT = 'N'
const PAWN = 'P'

const BLACK = 'BLACK'
const WHITE = 'WHITE'

const images = {
  [ROCK]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png',
  },
  [BISHOP]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png',
  },
  [QUEEN]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png',
  },
  [KING]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png',
  },
  [KNIGHT]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png',
  },
  [PAWN]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png',
  },
}

class App extends Component {

  state = {
    items: [
      {
        type: ROCK,
        position: '00',
        side: BLACK,
      },
      {
        type: ROCK,
        position: '07',
        side: BLACK,
      },
      {
        type: ROCK,
        position: '70',
        side: WHITE,
      },
      {
        type: ROCK,
        position: '77',
        side: WHITE,
      },

      {
        type: QUEEN,
        position: '03',
        side: BLACK,
      },
      {
        type: QUEEN,
        position: '73',
        side: WHITE,
      },

      {
        type: KING,
        position: '04',
        side: BLACK,
      },
      {
        type: KING,
        position: '74',
        side: WHITE,
      },

      {
        type: BISHOP,
        position: '02',
        side: BLACK,
      },
      {
        type: BISHOP,
        position: '05',
        side: BLACK,
      },
      {
        type: BISHOP,
        position: '72',
        side: WHITE,
      },
      {
        type: BISHOP,
        position: '75',
        side: WHITE,
      },

      {
        type: KNIGHT,
        position: '01',
        side: BLACK,
      },
      {
        type: KNIGHT,
        position: '06',
        side: BLACK,
      },
      {
        type: KNIGHT,
        position: '71',
        side: WHITE,
      },
      {
        type: KNIGHT,
        position: '76',
        side: WHITE,
      },

      {
        type: PAWN,
        position: '10',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '11',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '12',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '13',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '14',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '15',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '16',
        side: BLACK,
      },
      {
        id: 23,
        type: PAWN,
        position: '17',
        side: BLACK,
      },

      {
        type: PAWN,
        position: '60',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '61',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '62',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '63',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '64',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '65',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '66',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '67',
        side: WHITE,
      },
    ],
    selectedIndex: null,
    availableMoves: [],
    currentSide: WHITE,
  }

  isBlack = (rowIndex, columnIndex) => {
    return (rowIndex + columnIndex) % 2 === 1
  }

  itemOfPos = (pos) => {
    const { items } = this.state

    return items.find(item => item.position === pos)
  }

  getCoordFromItem = (item) => {
    return item.position.split('').map(item => +item)
  }

  getPawnMoves = (item) => {
    const coord = this.getCoordFromItem(item)
    const availableMoves = []
    if (item.side === BLACK) {
      const replaceRight = `${coord[0] + 1}${coord[1] + 1}`
      if (this.itemOfPos(replaceRight) && this.itemOfPos(replaceRight).side === WHITE) {
        availableMoves.push(replaceRight)
      }
      const replaceLeft = `${coord[0] + 1}${coord[1] - 1}`
      if (this.itemOfPos(replaceLeft) && this.itemOfPos(replaceLeft).side === WHITE) {
        availableMoves.push(replaceLeft)
      }

      const nextPos = `${coord[0] + 1}${coord[1]}`
      if (!this.itemOfPos(nextPos)) {
        availableMoves.push(nextPos)
      }
      if (coord[0] === 1) {
        availableMoves.push(`${coord[0] + 2}${coord[1]}`)
      }
    }

    if (item.side === WHITE) {
      const replaceRight = `${coord[0] - 1}${coord[1] + 1}`
      if (this.itemOfPos(replaceRight) && this.itemOfPos(replaceRight).side === BLACK) {
        availableMoves.push(replaceRight)
      }
      const replaceLeft = `${coord[0] - 1}${coord[1] - 1}`
      if (this.itemOfPos(replaceLeft) && this.itemOfPos(replaceLeft).side === BLACK) {
        availableMoves.push(replaceLeft)
      }
      const nextPos = `${coord[0] - 1}${coord[1]}`
      if (!this.itemOfPos(nextPos)) {
        availableMoves.push(nextPos)
      }
      if (coord[0] === 6) {
        availableMoves.push(`${coord[0] - 2}${coord[1]}`)
      }
    }

    return availableMoves
  }

  getRockMoves = (item) => {
    const availableMoves = []
    const coord = this.getCoordFromItem(item)
    for (let i = coord[0]; i <= 7; i++) {
      const nextPos = `${i + 1}${coord[1]}`
      const itemInPos = this.itemOfPos(nextPos)
      if (!itemInPos) {
        availableMoves.push(nextPos)
        continue
      }
      if (itemInPos.side !== item.side) {
        availableMoves.push(nextPos)
      }

      break
    }

    for (let i = coord[0]; i >= 0; i--) {
      const nextPos = `${i - 1}${coord[1]}`
      const itemInPos = this.itemOfPos(nextPos)
      if (!itemInPos) {
        availableMoves.push(nextPos)
        continue
      }
      if (itemInPos.side !== item.side) {
        availableMoves.push(nextPos)
      }

      break
    }

    for (let i = coord[1]; i <= 7; i++) {
      const nextPos = `${coord[0]}${i + 1}`
      const itemInPos = this.itemOfPos(nextPos)
      if (!itemInPos) {
        availableMoves.push(nextPos)
        continue
      }
      if (itemInPos.side !== item.side) {
        availableMoves.push(nextPos)
      }

      break
    }

    for (let i = coord[1]; i >= 0; i--) {
      const nextPos = `${coord[0]}${i - 1}`
      const itemInPos = this.itemOfPos(nextPos)
      if (!itemInPos) {
        availableMoves.push(nextPos)
        continue
      }
      if (itemInPos.side !== item.side) {
        availableMoves.push(nextPos)
      }

      break
    }

    return availableMoves
  }

  getBishopMoves = (item) => {
    const moves = []
    const coord = this.getCoordFromItem(item)

    for (let i = coord[0]; i <= 7; i++) {//move down to left
      const nextY = coord[1] - (i - coord[0] + 1)
      if (nextY < 0) {
        break
      }
      const nextPos = `${i + 1}${nextY}`
      const itemInPos = this.itemOfPos(nextPos)
      if (!itemInPos) {
        moves.push(nextPos)
        continue
      }

      if (itemInPos.side !== item.side) {
        moves.push(nextPos)
      }

      break
    }

    for (let i = coord[0]; i <= 7; i++) { //move down right
      const nextY = coord[1] + (i - coord[0] + 1)
      if (nextY > 7) {
        break
      }

      const nextPos = `${i + 1}${nextY}`
      const itemInPos = this.itemOfPos(nextPos)
      if (!itemInPos) {
        moves.push(nextPos)
        continue
      }

      if (itemInPos.side !== item.side) {
        moves.push(nextPos)
      }

      break
    }

    for (let i = coord[0]; i >= 0; i--) { //move top left
      const nextY = coord[1] - (coord[0] - i + 1)
      if (nextY < 0) {
        break
      }
      const nextPos = `${i - 1}${nextY}`
      const itemInPos = this.itemOfPos(nextPos)
      if (!itemInPos) {
        moves.push(nextPos)
        continue
      }

      if (itemInPos.side !== item.side) {
        moves.push(nextPos)
      }

      break
    }

    for (let i = coord[0]; i >= 0; i--) { //move top right
      const nextY = coord[1] + (coord[0] - i + 1)
      if (nextY > 7) {
        break
      }
      const nextPos = `${i - 1}${nextY}`
      const itemInPos = this.itemOfPos(nextPos)
      if (!itemInPos) {
        moves.push(nextPos)
        continue
      }

      if (itemInPos.side !== item.side) {
        moves.push(nextPos)
      }

      break
    }

    return moves
  }

  getKnightMoves = (item) => {
    const coord = this.getCoordFromItem(item)

    const topTwoLeftPos = `${coord[0] - 2}${coord[1] - 1}`
    const topTwoRightPos = `${coord[0] - 2}${coord[1] + 1}`
    const topOneLeftPos = `${coord[0] - 1}${coord[1] + 2}`
    const topOneRightPos = `${coord[0] - 1}${coord[1] - 2}`

    const bottomTwoLeft = `${coord[0] + 2}${coord[1] - 1}`
    const bottomTwoRight = `${coord[0] + 2}${coord[1] + 1}`
    const bottomOneLeft = `${coord[0] + 1}${coord[1] - 2}`
    const bottomOneRight = `${coord[0] + 1}${coord[1] + 2}`

    return [
      topTwoLeftPos,
      topTwoRightPos,
      topOneLeftPos,
      topOneRightPos,
      bottomTwoLeft,
      bottomTwoRight,
      bottomOneLeft,
      bottomOneRight,
    ].filter(pos => {
      const itemInPos = this.itemOfPos(pos)
      if (!itemInPos) {
        return true
      }

      return itemInPos.side !== item.side
    })
  }

  getQueenMoves = (item) => {
    return this.getRockMoves(item).concat(this.getBishopMoves(item))
  }

  getKingMoves = (item) => {
    const coord = this.getCoordFromItem(item)
    const moves = []
    for (let i = coord[0] - 1; i <= coord[0] + 1; i++) {
      for (let j = coord[1] - 1; j <= coord[1] + 1; j++) {
        const pos = `${i}${j}`
        const itemInPos = this.itemOfPos(pos)
        if (!itemInPos || itemInPos.side !== item.side) {
          moves.push(pos)
        }
      }
    }

    return moves
  }

  getMoves = (item) => {
    const obj = {
      [PAWN]: () => this.getPawnMoves(item),
      [ROCK]: () => this.getRockMoves(item),
      [BISHOP]: () => this.getBishopMoves(item),
      [KNIGHT]: () => this.getKnightMoves(item),
      [QUEEN]: () => this.getQueenMoves(item),
      [KING]: () => this.getKingMoves(item),
    }

    return obj[item.type]()
  }

  isValidMove = (item, pos) => {
    return this.getMoves(item).includes(pos)
  }

  renderItem = (pos) => {
    const { items } = this.state
    const item = items.find(it => it.position === pos)

    return item && <img style={{ width: 70 }} src={images[item.type][item.side]} alt={item.type} />
  }

  indexOfPos = (pos) => {
    const { items } = this.state
    return items.findIndex(item => item.position === pos)
  }

  onDragStart = (e, pos) => {
    e.dataTransfer.effectAllowed = 'copyMove'
    const { items, currentSide } = this.state
    const index = this.indexOfPos(pos)
    const item = items[index]
    if (item.side !== currentSide) {
      e.preventDefault()
      return
    }
    this.setState({
      selectedIndex: index,
      availableMoves: this.getMoves(item),
    })
  }

  onDragOver = (e) => {
    e.preventDefault()
  }

  onDragEnter = (e) => {
    e.dataTransfer.dropEffect = 'copy'
  }

  onDrop = (e, pos) => {
    const { selectedIndex, items } = this.state
    const item = items[selectedIndex]
    if (!this.isValidMove(item, pos)) {
      return
    }
    this.handleMove(pos, selectedIndex)
    this.setState({
      availableMoves: [],
    })
  }

  onDragEnd = () => {
    this.setState({
      selectedIndex: null,
      availableMoves: [],
    })
  }

  onBoxClick = (e, pos) => {
    const { items, selectedIndex, currentSide, availableMoves } = this.state
    const itemIndex = this.indexOfPos(pos)
    const item = items[itemIndex]
    const moves = item ? this.getMoves(item) : []
    if (selectedIndex === null && item) {
      this.setState({
        selectedIndex: itemIndex,
        availableMoves: moves,
      })
      return
    }

    if (item && item.side === currentSide) {
      this.setState({
        selectedIndex: itemIndex,
        availableMoves: moves,
      })
      console.log(1111)
      return
    }
    if (!availableMoves.includes(pos)) {
      return
    }


    this.handleMove(pos, selectedIndex)
  }

  handleMove = (pos, selectedIndex) => {
    const { items, currentSide } = this.state
    this.setState({
      items: items.map((item, i) => {
        if (i === selectedIndex) {
          return {
            ...item,
            position: pos,
          }
        }

        return item
      }),
      selectedIndex: null,
      currentSide: currentSide === BLACK ? WHITE : BLACK,
      availableMoves: [],
    })
  }

  render() {
    const { availableMoves } = this.state
    return (
      <div className="App">
        <div className="chess">
          {arr.map((item, index) => (
            <div key={index} className="row">
              {arr.map((it, i) => {
                const pos = `${index}${i}`
                return (
                  <div
                    key={i}
                    onClick={(e) => this.onBoxClick(e, pos)}
                    draggable={false}
                    onDragEnter={this.onDragEnter}
                    onDragStart={e => this.onDragStart(e, pos)}
                    onDragOver={e => this.onDragOver(e, pos)}
                    onDrop={e => this.onDrop(e, pos)}
                    onDragEnd={this.onDragEnd}
                    className={classnames('box', {
                      black: this.isBlack(index, i),
                      available: availableMoves.includes(pos)
                    })}
                  >
                    <div className="circle" />
                    {this.renderItem(pos)}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
