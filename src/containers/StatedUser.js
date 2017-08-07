import {connect} from 'react-redux'

import User from '../components/User'

const mapStateToProps = state => {
  return {user: state.user}
}

const StatedUser = connect(mapStateToProps)(User)

export default StatedUser