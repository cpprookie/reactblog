import Header from '../components/common/Header'
import {connect} from 'react-redux'
import {showConfirm} from '../actions'

const mapStateToProps = state => {
  return {
    user: state.user,
    headerFix: state.headerFix       
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openSignoutDialog: () => {
      dispatch(showConfirm(true))
    }
  }
}

const StatedHeader = connect(
  mapStateToProps,
  mapDispatchToProps)(Header)

export default StatedHeader