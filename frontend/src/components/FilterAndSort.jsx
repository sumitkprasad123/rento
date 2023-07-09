import { Box, Checkbox, CheckboxGroup, Heading, Radio, RadioGroup, Stack } from '@chakra-ui/react'
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
        <Heading>Filter</Heading>
        <CheckboxGroup colorScheme='green' value={filterValues} onChange={handleFilterChange} >
          <Stack spacing={[1, 3]} direction={['column']}>
              <Checkbox value='Available'>Available</Checkbox>
              <Checkbox value='Booked'>Booked</Checkbox>
          </Stack>
       </CheckboxGroup>

    <Heading>Sort</Heading>
    <RadioGroup value={sortType} onChange={handleSortChange} >
      <Stack direction='column'>
        <Radio value='asc'>Asc</Radio>
        <Radio value='desc'>Desc</Radio>
      </Stack>
    </RadioGroup>
    </Box>
  )
}

export default FilterAndSort