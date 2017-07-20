import {connect} from 'react-redux'

import Posts from '../components/Posts'

const mapStateToProps = state => {
  return {user: state.user}
}

const StatedPosts = connect(mapStateToProps)(Posts)

export default StatedPosts