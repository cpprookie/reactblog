import React,{Component} from 'react'

/**
 * @param 
 * totalPages less than 5 -->  1 2 3 4 5/totalPages       
 * totalPages more than 5 -->  
 *    1 2 3 4 ... totalPages
 *    1 ... 3 4 5 ... totalPages
 *    1 ... totalPages-3  totalPages-2 totalPages-1 totalPages
 */
class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageList: [], 
      currentPage: 1
    }
    this.handleItemClick = this.handleItemClick.bind(this)
    this.switchToNext = this.switchToNext.bind(this)
    this.switchToPrev = this.switchToPrev.bind(this)
    this.updatePageList =  this.updatePageList.bind(this)
  }

  componentWillMount () {
    const pages = this.props.totalPages
    if (pages <= 6) {
      let list = Array.from(new Array(pages)).map((item,index) => item = index+1)
      this.setState({pageList: list})
    }
    if (pages > 6) {
      this.setState({pageList: [1,2,3,4,'...',pages]})
    }
  }

  handleItemClick (e) {
    let text = e.target.textContent
    if (text === '...' || parseInt(text, 10) === this.state.currentPage) {
      return false
    }
    // console.log(text)
    this.updatePageList(parseInt(text, 10))
  }

  switchToNext () {
    if (this.state.currentPage === this.props.totalPages) {
      return false
    }
    this.updatePageList(this.state.currentPage + 1)
  }

  switchToPrev () {
    if (this.state.currentPage === 1) {
      return false
    }
    this.updatePageList(this.state.currentPage - 1)
  }

  /**
   * 
   * @param {*} value 为下一个currentPage 
   */
  updatePageList (value) {
    this.setState({currentPage: value})
    this.props.switchPage(value)
    let pages = this.props.totalPages
    if (pages < 7)  {
      return false
    } else {
      if (value > 3  && value < pages-2) {
        this.setState({pageList: [1,'...',value-1, value, value+1,'...',pages]})
      } else if (value <= 3) {
        this.setState({pageList: [1, 2, 3, 4, '...', pages]})
      } else {
        this.setState({pageList: [1, '...', pages-3, pages-2, pages-1, pages]})
      }
    }
  }

  render () {
    // less than 2 pages, pagination won't rend.
    if (this.props.totalPages < 2) {
      return null
    }
    return (
      <div className="pagination">
        <button className="pagination-button" onClick={this.switchToPrev}>prev</button>
          {this.state.pageList.map((pageItem,index) => {
            return <span key={index} onClick={this.handleItemClick}
              className={`pagination-item ${(pageItem === '...' || pageItem === this.state.currentPage) 
                ? 'disabled' : ''}`}>{pageItem}</span>
          })}
        <button className="pagination-button" onClick={this.switchToNext}>next</button>
      </div>
    )
  }
}

export default Pagination