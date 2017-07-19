import Signin from '../components/Signin'
import {connect} from 'react-redux'
import {signin} from '../actions'

const mapStateToProps = state => {
  return {user: state.user}
}
const mapDispatchToProps = dispatch => {
  return {
    userCache: user => {
      dispatch(signin(user))}
  }
}

const SigninLink = connect (
  mapStateToProps,
  mapDispatchToProps
)(Signin)


export default SigninLink


