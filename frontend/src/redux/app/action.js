import { getProductsAPI } from "./api";
// import {  updateProuctAPI } from "./app.api";
import * as types from "./actionTypes";




//action creators
const productRequest = () => {
  return { type: types.PRODUCT_REQUEST };
};

const productError = () => {
  return { type: types.PRODUCT_ERROR };
};

const getProductSuccess = (data) => {
  return { type: types.GET_PRODUCTS_SUCCESS, payload: data };
};

// const updateProductSuccess = (payload) => {
//   return { type: types.UPDATE_PRODUCT_SUCCESS, payload };
// };

export const getProducts =
  (getProductsParam) => async (dispatch) => {
    dispatch(productRequest());
    try {
      let data = await getProductsAPI(getProductsParam);
      if (data) {
        dispatch(getProductSuccess(data));
      }
    } catch (e) {
      dispatch(productError());
    }
  };

// export const updateProduct =
//   (id: number, payload) =>
//   async (dispatch) => {
//     dispatch(productRequest());
//     try {
//       let data = await updateProuctAPI(id, payload);
//       if (data) {
//         dispatch(updateProductSuccess(data));
//       }
//     } catch (e) {
//       dispatch(productError());
//     }
//   };
