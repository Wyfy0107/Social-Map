import { actionTypes } from "./actionCreators";

type storeState = {
  test: string;
};

const initialState: storeState = {
  test: "",
};

const reducer = (state = initialState, action: actionTypes): storeState => {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        test: "working",
      };

    default:
      return state;
  }
};

export default reducer;
