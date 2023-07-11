import { Box, Checkbox, CheckboxGroup, Heading, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const FilterAndSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialFilterValues = searchParams.getAll("filter")
    const initialSortValues = searchParams.getAll("sort")
    const [filterValues, setFilterValues] = useState(initialFilterValues || []);
    const [sortType, setSortType] = useState( initialSortValues || []);
    const handleFilterChange  = (value) => {
        setFilterValues(value)
    }
    const handleSortChange = (value) => {
        setSortType(value)
    }
    // console.log(searchParams)
    useEffect(() => {
        let params = {}
        if(filterValues.length || sortType.length){ 
          params.filter = filterValues
          params._sort = "propertyPrice"
          params._order = sortType
        }
        setSearchParams(params)
    }, [filterValues,sortType])

    
  return (
    <Box p={6}>
        <Heading mt={3}>Filter</Heading>
        <Text mt={3} mb={2}><b>based on room availability</b></Text>
        <CheckboxGroup colorScheme='green' value={filterValues} onChange={handleFilterChange} >
          <Stack spacing={[1, 3]} direction={['column']}>
              <Checkbox value='Available'>Available</Checkbox>
              <Checkbox value='Booked'>Booked</Checkbox>
          </Stack>
       </CheckboxGroup>

      <Heading mt={8} >Sort</Heading>
      <Text mt={3} mb={2}><b>based on price</b></Text>
      <RadioGroup value={sortType} onChange={handleSortChange} >
        <Stack direction='column'>
          <Radio value='asc'>Low to High</Radio>
          <Radio value='desc'>High to low </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  )
}

export default FilterAndSort