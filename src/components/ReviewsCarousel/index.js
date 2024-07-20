import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {activeReview: 0, reviewsList: props.reviewsList}
  }

  onClickLeftArrow = () => {
    const {activeReview} = this.state
    if (activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  onClickRightArrow = () => {
    const {activeReview, reviewsList} = this.state
    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  render() {
    const {activeReview, reviewsList} = this.state
    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-carousel">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            className="button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="review-card">
            <img
              src={reviewsList[activeReview].imgUrl}
              alt={reviewsList[activeReview].username}
              className="profile-img"
            />
            <p className="username">{reviewsList[activeReview].username}</p>
            <p className="company-name">
              {reviewsList[activeReview].companyName}
            </p>
            <p className="review">{reviewsList[activeReview].description}</p>
          </div>
          <button
            type="button"
            onClick={this.onClickRightArrow}
            className="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
