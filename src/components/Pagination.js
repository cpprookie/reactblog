import React,{Component} from 'react'

class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageList = []
    }
  }
  render () {
    return (
      <div>
        {this.state.pageList.map()}
      </div>
    )
  }
}