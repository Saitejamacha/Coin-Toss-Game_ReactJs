import {Component} from 'react'

import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {displayImage: headsImage, headsCount: 0, tailsCount: 0}

  onBtnClick = () => {
    const {headsCount, tailsCount} = this.state
    let resultImage = ''
    let latestHeadCount = headsCount
    let latestTailCount = tailsCount

    const randomNum = Math.floor(Math.random() * 2)

    if (randomNum === 0) {
      resultImage = headsImage
      latestHeadCount += 1
    } else {
      resultImage = tailsImage
      latestTailCount += 1
    }
    this.setState({
      displayImage: resultImage,
      headsCount: latestHeadCount,
      tailsCount: latestTailCount,
    })
  }

  render() {
    const {headsCount, tailsCount, displayImage} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-con">
        <div className="inner-con">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img alt="toss result" src={displayImage} />

          <button type="button" onClick={this.onBtnClick}>
            Toss Coin
          </button>
          <div className="result-con">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
