import { Card, CardBody, Heading, Stack,HStack,Text, Image, CardFooter, Button,Box,Center, Divider  } from '@chakra-ui/react'
import React from 'react'
import { IoMdTime } from "react-icons/io";
import {BsCalendarDate } from "react-icons/bs";
import {MdOutlineRoom,MdHotel,MdDateRange } from "react-icons/md";
import { Link } from 'react-router-dom';




const SPP = ({
      propertyId,
      propertyDesc,
      propertyPrice,
      propertyImage,
      verified,
      dateAdded,
      propertyLocation,
      propertyAvailability 
     }) => {
  let date = new Date(dateAdded);
  let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }

  return (
    <Box  
    // height={{
    //   base: '50%', // 0-48em
    //   md: '70%', // 48em-80em,
    //   xl: '80%', // 80em+
    // }}
    // bg='teal.400'
    // width={[
    //   '100%', // 0-30em
    //   '90%', // 30em-48em
    //   '100%', // 62em+
    // ]}
    
    >
      <Card
        direction={{ base: 'row', sm: 'row'}}
        overflow='hidden'
        variant='outline'
        p={3}
      >
        <Image
          objectFit='cover'
          p={2}
          maxW={{ base: '30%', sm: '50%' }}
          // maxH={{ base: '50%', sm: '50%' }}
          src={propertyImage}
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='1.8rem'>{propertyDesc}</Heading>
              <HStack>
                <Box  as='span' fontSize='3xl'><b>₹</b> </Box>
                <Box fontSize='1.2rem' >
                    {propertyPrice}/month
                </Box>
              </HStack>
              
              <HStack>
                <Box  as='span' fontSize='2xl'><IoMdTime/></Box>
                <Box fontSize='1.2rem'  color={verified?"green":"red"}>
                  {verified?"Verified":"Non Verified"}
                </Box>
              </HStack>
              <HStack>
                <Box  as='span' fontSize='2xl'><MdHotel/></Box>
                <Box fontSize='1.2rem'  color={propertyAvailability==="Available"?"green":"red"}>
                  {propertyAvailability}
                </Box>
              </HStack>

              <HStack>
                <Box  as='span' fontSize='2xl'><MdDateRange/></Box>
                <Box fontSize='1rem' >
                  {date.toLocaleString('en-US', options)}
                </Box>
              </HStack>
          </CardBody>
          {/* <Divider/> */}
          <HStack>
            <Box  as='span' fontSize='4xl'><MdOutlineRoom/></Box>
            <Box >
              {propertyLocation.join(" ")}
            </Box>
          </HStack>
          
          <CardFooter>
          <Link to={`/products/${propertyId}`}>
              <Button variant='solid' colorScheme='blue'>
                view more
              </Button>
          </Link>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  )
}

export default SPP