import {connect} from 'react-redux'
import {updateAvatar} from '../actions'
import User from '../components/User'

const mapStateToProps = state => {
  return {user: state.user}
}

const mapDispatchToProps = dispatch => {
  return {
    changeAvatar: user => {
      dispatch(updateAvatar(user))
    }
  }
}

const StatedUser = connect(mapStateToProps,mapDispatchToProps)(User)

export default StatedUser