export function signin (user) {
  return {
    type: 'SIGN_IN',
    user: user
  }
}

export function updateAvatar (user) {
  return {
    type: 'UPDATE_Avatar',
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

export function watchHeaderFix (flag) {
  return {
    type: 'HEADER_FIX',
    headerFix: flag
  }
}