import { ActionTypes } from '../contants/action-types';
const intialState = {
  products: [
    {
      id: 1,
      title: 'DIPesh',
      category: 'programmer',
    },
  ],
};
//action and type
export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
