import {Component} from 'react'

import './index.css'

class Text extends Component {
  state = {view: true, val: ''}

  clickButton = () => {
    this.setState({view: false})
  }

  editButton = () => {
    this.setState({view: true})
  }

  textInput = event => {
    console.log(event.target.value)
    this.setState({val: event.target.value})
  }

  render() {
    const {view, val} = this.state
    if (view) {
      return (
        <div className="bg-container">
          <div className="card-1">
            <h1 className="head">Editable Text Input</h1>
            <div className="hi">
              <input
                type="text"
                className="input"
                onChange={this.textInput}
                value={val}
              />
              <button type="button" className="butt" onClick={this.clickButton}>
                Save
              </button>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <div className="card-1">
          <h1 className="head">Editable Text Input</h1>
          <div className="card-2">
            <p className="para">{val}</p>
            <button type="button" className="butt" onClick={this.editButton}>
              Edit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Text
