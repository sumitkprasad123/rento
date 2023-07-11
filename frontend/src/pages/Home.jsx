import React from 'react'
import HomeTop from '../components/HomeTop'
import Service from '../components/Service'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box >
      <HomeTop/>
      <Service/>
    </Box>
  )
}

export default Home