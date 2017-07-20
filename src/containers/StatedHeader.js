import Header from '../components/common/Header'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {user: state.user}
}

const StatedHeader = connect(mapStateToProps)(Header)

export default StatedHeader