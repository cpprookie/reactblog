import {connect} from 'react-redux'

import BlogEdit from '../components/common/BlogEdit'

const mapStateToProps = state => {
  return {user: state.user}
}

const StatedBlogEdit = connect(mapStateToProps)(BlogEdit)

export default StatedBlogEdit