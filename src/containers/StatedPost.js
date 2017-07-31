import {connect} from 'react-redux'

import Post from '../components/Post'

const mapStateToProps = state => {
  return {user: state.user}
}

const StatedPost = connect(mapStateToProps)(Post)

export default StatedPost