// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  // Toggle subscribe state on button click
  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  // Return button based on state
  renderSubscribeBtn = () => {
    const {isSubscribe} = this.state

    return (
      <button className="btn" type="button" onClick={this.onSubscribe}>
        {isSubscribe ? 'Subscribed' : 'Subscribe'}
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome Akshata</h1>
        <p className="para">Thank you! Happy Learning</p>
        <div>{this.renderSubscribeBtn()}</div>
      </div>
    )
  }
}

export default Welcome
