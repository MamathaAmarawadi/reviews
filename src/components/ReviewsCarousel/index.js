// Write your code here

import {Component} from 'react'

import './index.css'

const Profile = props => {
  const {e} = props
  console.log(e)
  const {imgUrl, username, companyName, description} = e
  return (
    <div>
      <img src={imgUrl} alt={username} />
      <p className="heading">{username}</p>
      <p>{companyName}</p>
      <p>{description}</p>
    </div>
  )
}

class ReviewsCarousel extends Component {
  state = {count: 0}

  onLeftButton = () => {
    console.log('left')
    const {count} = this.state
    const val = count === 0 ? 0 : count - 1
    this.setState({count: val})
  }

  onRightButton = () => {
    console.log('right')
    const {count} = this.state
    const val = count === 3 ? 3 : count + 1
    this.setState({count: val})
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    console.log(reviewsList)

    return (
      <div className="container">
        <div className="center">
          <div className="img1">
            <button
              data-testid="leftArrow"
              className="btn1"
              onClick={this.onLeftButton}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
          </div>
          <div className="middle">
            <h1 className="heading">Reviews</h1>

            <Profile e={reviewsList[count]} key={reviewsList[count].username} />
          </div>
          <div className="img1">
            <button
              date-testid="rightArrow"
              className="btn2"
              onClick={this.onRightButton}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
