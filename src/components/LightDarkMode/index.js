import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {status: true}

  backgroundChange = () => {
    this.setState(prevState => ({
      status: !prevState.status,
    }))
  }

  change = () => {
    const {status} = this.state
    return status ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const modeChange = this.change()
    const {status} = this.state

    let color
    let white
    if (status) {
      color = 'black'
      white = 'white'
    }

    return (
      <div className="bgContainer">
        <div className={`Container ${color}`}>
          <h1 className={`heading ${white}`}>Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.backgroundChange}>
            {modeChange}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
