const  initialState = {
  user: {}
}

function blogApp (state, action) {
  if (typeof(state) === 'undefined') {
    return initialState
  }

  switch(action.type) {
    case 'SIGN_IN':
      return Object.assign({}, state, {user: action.user})
    break
    case 'SIGN_OUT':
      return Object.assign({}, state, {user: {}})
    break
    default: 
      return state
  }
}

export default blogApp