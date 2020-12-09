import * as actionTypes from "../store/actions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  formEntries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_FORM_DATA:
      return {
        formEntries: state.formEntries.concat({
          id: uuidv4(),
          value: action.payload,
        }),
      };
    case actionTypes.DELETE_FORM_DATA:
      return {
        formEntries: state.formEntries.filter(
          (entry) => entry.id !== action.entryId
        ),
      };
    default:
      return state;
  }
};

export default reducer;
