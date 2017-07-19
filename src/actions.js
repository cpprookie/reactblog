export function signin (user) {
  console.log('signin is called====>' + JSON.stringify(user))
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