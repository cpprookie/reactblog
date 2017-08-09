const  initialState = {
  user: {},
  displayFlag: false,
  headerFix: false
}

function blogApp (state, action) {
  if (typeof(state) === 'undefined') {
    return initialState
  }

  switch(action.type) {
    case 'SIGN_IN':
      return Object.assign({}, state, {user: action.user})
    case 'UPDATE_AVATAR':
      return Object.assign({}, state, {user: action.user})
    case 'SIGN_OUT':
      // console.log('Sign out calls')
      return Object.assign({}, state, {user: {}})
    case 'SHOW_CONFIRM':
      // console.log('SHOW_CONFIRM is called --->' + action.displayFlag)
      return Object.assign({}, state, {displayFlag: action.displayFlag})
    case 'HEADER_FIX':
      // console.log('HEADER_FIX is called --->' + action.headerFix)
      return Object.assign({}, state, {headerFix: action.headerFix})
    default: 
      return state
  }
}

export default blogApp