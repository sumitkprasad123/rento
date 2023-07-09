import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../redux/app/action";
import { useDispatch, useSelector } from "react-redux";

const useCurrentParamProduct = () => {
    const {propertyId} = useParams();
    const products = useSelector((store) => store.AppReducer.data) || [];
    const dispatch = useDispatch()
    const [currentProduct, setCurrentProduct] = useState()

    useEffect(() => {
        if(products.length === 0){
          dispatch(getProducts())
        }
      },[dispatch, products.length])
    
      useEffect(() => {
        if(propertyId){
          const pdt = products.find(item => item.propertyId === propertyId);
          // const pdt = products.filter(item => item.propertyId === propertyId);
          setCurrentProduct(pdt)
        }
      }, [propertyId, products])
    
      return {currentProduct, id: propertyId}
}

export {useCurrentParamProduct}