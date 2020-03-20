import { FETCH_DATA, POST_DATA, DELETE_DATA, EDIT_DATA, UPDATE_SMURFS, SET_ERROR } from "../actions/actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        smurfs: []
      };
      case POST_DATA:
      return {
        ...state,
        smurfs: []
      };
      case DELETE_DATA:
      return {
        ...state,
        smurfs: []
      };
      case EDIT_DATA:
      return {
        ...state,
        smurfs: []
      };
    case UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
