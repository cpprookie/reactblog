export function signin (user) {
  return {
    type: 'SIGN_IN',
    user: user
  }
}

export function signout () {
  return {
    type: 'SIGN_OUT',
    user: {}
  }
}

export function showConfirm (flag) {
  return {
    type: 'SHOW_CONFIRM',
    displayFlag: flag
  }
}