const SET_USER = "currentUser/setCurrentUser"


export const setUser = (user) => ({
  type: SET_USER,
  user
})

export const setCurrentUser = () => async (dispatch) => {
  const res = await fetch('/api/auth/');
  const user = await res.json();
  dispatch(setUser(user))
}


function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = {};
      if (action.user) {

        if (action.user.errors === undefined) {
          newState['user'] = action.user
        } else {
          newState['user'] = null
        }
      }
      return newState;
    default:
      return state;
  }
}

export default reducer
