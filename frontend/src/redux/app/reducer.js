import * as types from "./actionTypes";


const initialState = {
  loading: false,
  error: false,
  data: [],
};

const reducer = (oldState = initialState,action) => {
  const { type,payload } = action;
  switch (type) {
    case types.PRODUCT_REQUEST:
      return { ...oldState, loading: true };
    case types.PRODUCT_ERROR:
      return { ...oldState, loading: false, error: true };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...oldState, loading: false, data:payload };

    // case types.UPDATE_PRODUCT_SUCCESS:
    //   return {
    //     ...oldState,
    //     loading: false,
    //     data: oldState.data.map((item) =>
    //       item.id === payload.id ? payload : item
    //     ),
    //   };

    default:
      return oldState;
  }
};

export { reducer };
