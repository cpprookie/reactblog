const  initialState = {
  user: {}
}

function blogApp (state, action) {
  if (typeof(state) === 'undefined') {
    return initialState
  }

  switch(action.type) {
    case 'SIGN_IN':
      console.log(JSON.stringify(action.user))
      return Object.assign({}, state, {user: action.user})
    case 'SIGN_OUT':
      return Object.assign({}, state, {user: {}})
    default: 
      return state
  }
}

export default blogApp