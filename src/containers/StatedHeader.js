import Header from '../components/common/Header'
import {signin} from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {user: state.user}
}

const StatedHeader = connect(mapStateToProps)(Header)

export default StatedHeader