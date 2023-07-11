import { Box, Flex,Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import FilterAndSort from '../components/FilterAndSort';
import Pagination from '../components/Pagination';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../redux/app/action';
import { useDispatch, useSelector } from 'react-redux';
import SPP from '../components/SPP';


const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector((store) => store.AppReducer.data)
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const [activePage, setActivePage] = useState(1)

    const handlePageChange = (newPageNumber)=> {
        setActivePage(newPageNumber)
    }

    // console.log(products)
    // console.log(searchParams)
    console.log(searchParams.getAll('_order'))

    // const customFilter = (item, index) => {  
    //         //searchParams.getAll('filter).includes(item.category) 
    // }

    useEffect(() => {
        if(products.length === 0 || location){  
            const getProductsParam = {
                params: {
                   
                    propertyAvailability: searchParams.getAll('filter'),
                     _sort: "propertyPrice",
                    _order:  searchParams.getAll('_order').join()
                }
            }
            dispatch(getProducts(getProductsParam))
        }
    },[location.search])
 
  return (
    <Box>
        <Flex p={10} flexDirection={{base:"column",md:"column",lg:"row"}}>
        <Box minW='260px' gap={4} >
            <FilterAndSort />
        </Box>
        <Box>

       
        {/* <Flex flexWrap={'wrap'} justifyContent={'center'}> */}
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(2, 1fr)'} } gap={6}>
        {products.length > 0 && products.filter((item, index) => {
         return index >= 6 * (activePage - 1) && index < 6 * activePage
        }).map(item => {
            return <SPP key={item.propertyId} {...item} />
        })}
        </Grid>
        <Flex justifyContent="center" p={6}>

        <Pagination productsLength={products?.length}
        perPage={6} activePage={activePage} handlePageChange={handlePageChange}/>
        </Flex>
        </Box>
        </Flex>
        {/* </Flex> */}
    </Box>
  )
}

export default Product