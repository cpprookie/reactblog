import {connect} from 'react-redux'
import NewPost from '../components/NewPost'

const mapStateToProps = state => {
  return {user: state.user}
}

const StatedNewPost = connect(mapStateToProps)(NewPost)

export default StatedNewPost