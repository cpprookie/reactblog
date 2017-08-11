import Confirm from '../components/common/Confirm'
import {connect} from 'react-redux'
import {signout, showConfirm} from '../actions'

const mapStateToProps = state => {
  return {
    user: state.user,
    displayFlag: state.displayFlag
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // reset state.user after logging out request 
    exit: () => {
      dispatch(signout())
    },
    closeSignoutDialog: () => {
      dispatch(showConfirm(false))
    }
  }
}

const SignoutConfirm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm)

export default SignoutConfirm