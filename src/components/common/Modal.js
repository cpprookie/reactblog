import React,{Component} from 'react'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {display: false}
  }
  render () {
    return (
      <div className="modal">
        <div className="modal-body">
          {this.props.message}
        </div>    
        <div className="modal-footer">
          <button>No</button>
          <button>Yes</button>
        </div>
      </div>
    )
  }
}

export default Modal