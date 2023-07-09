import axios from "axios";

export const getProductsAPI = async (getProductsParam) => {
  console.log("111",getProductsParam)
  try {
    let response = await axios.get( "http://localhost:8080/products", getProductsParam);
    return response.data;
  } catch (e) {
    console.error("getProductsAPI error", e);
  }
};

// export const updateProuctAPI = async (id,payload) => {
//   try {
//     let response = await axios.patch( `http://localhost:8080/products/${id}`,payload );
//     return response.data;
//   } catch (e) {
//     console.error("updateProductsAPI error", e);
//   }
// };
