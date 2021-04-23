const SAVE_INFO = 'checkout/saveInfo';

export const saveInfo = (info) => ({
  type: SAVE_INFO,
  info,
})

function reducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case SAVE_INFO:
      newState['country'] = action.info.country;
      newState['state'] = action.info.state;
      newState['firstName'] = action.info.firstName;
      newState['lastName'] = action.info.lastName;
      newState['address'] = action.info.address;
      newState['email'] = action.info.email;
      newState['city'] = action.info.city;
      newState['phoneNumber'] = action.info.phoneNumber;
      newState['zipCode'] = action.info.zipCode;
      return newState
    default:
      return state;
  }
}

export default reducer;
