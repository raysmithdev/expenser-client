const initialState = {
  isLoggedIn: false,
  userId: null,
  authToken: null
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        userId: action.userId,
        authToken: action.token
      }

    default:
      return state
  }
}

export default user
