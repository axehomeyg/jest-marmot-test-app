// Thunk
export const signup = name => ({
  type: 'SET_NAME',
  name})

// regular
export const gotoWelcome = () => ({
  type: 'GOTO_WELCOME'
})
