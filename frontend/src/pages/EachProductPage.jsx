import React, { useState } from 'react'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useCurrentParamProduct } from '../hooks/useCurrentParamProduct';
import { Carousel } from 'react-responsive-carousel';

export default function EachProductPage() {
//  const [data,setData] = useState()
  const {currentProduct, id} = useCurrentParamProduct()

console.log("asas",currentProduct)
console.log(id)


// const {
//         dateAdded,
//         listedBy,
//         propertyArea,
//         propertyAvailability,
//         propertyAvailableFor,
//         propertyContact,
//         propertyDesc,
//         propertyFeatures,
//         propertyFloor,
//         propertyFor,
//         propertyFurnished,
//         propertyId,
//         propertyImage,
//         propertyLike,
//         propertyLocation,
//         propertyPrice,
//         propertyType,
//         restriction,
//         verified
//         } = currentProduct

const data = {
  "dateAdded": 1660896855782,
  "listedBy": "Rento Team",
  "propertyArea": "1700 sq.ft",
  "propertyAvailability": "Available",
  "propertyAvailableFor": "All",
  "propertyContact": "+91940600000",
  "propertyDesc": "3BHK flat at Gandhi nagar",
  "propertyFeatures": [
    "Balcony,balcony",
    "Parking,parking",
    "Water,water",
    "Electricity (Chargeable),power",
    "Bathroom(Attached),bathroom",
    "Window,windows",
    "Shelves(Rack),shelves"
  ],
  "propertyFloor": "Total Floor : 1$Ground Floor",
  "propertyFor": "Rent/Lease",
  "propertyFurnished": "UnFurnished",
  "propertyId": "RP10036",
  "propertyImage": [
    "https://firebasestorage.googleapis.com/v0/b/rent-online-17b56.appspot.com/o/Property%2FR2022O619632%2F1660896856029.jpg?alt=media&token=b82da6a5-9698-4257-abf4-ca74762841c9",
    "https://firebasestorage.googleapis.com/v0/b/rent-online-17b56.appspot.com/o/Property%2FR2022O619632%2F1660896855796.jpg?alt=media&token=f2394b8b-6725-4ff6-9946-7229b835960b",
    "https://firebasestorage.googleapis.com/v0/b/rent-online-17b56.appspot.com/o/Property%2FR2022O619632%2F1660896856123.jpg?alt=media&token=dc4b908c-14ff-4f44-9c38-2467d2e2419b",
    "https://firebasestorage.googleapis.com/v0/b/rent-online-17b56.appspot.com/o/Property%2FR2022O619632%2F1660896856201.jpg?alt=media&token=aba3b009-d3c9-454c-b75a-ad4bdd0bb78e",
    "https://firebasestorage.googleapis.com/v0/b/rent-online-17b56.appspot.com/o/Property%2FR2022O619632%2F1660896856287.jpg?alt=media&token=8c77595b-71ef-44b0-91e2-c56f6f6d8c22",
    "https://firebasestorage.googleapis.com/v0/b/rent-online-17b56.appspot.com/o/Property%2FR2022O619632%2F1660896856375.jpg?alt=media&token=d80bb222-58b2-456c-9a4d-6413a887f218",
    "https://firebasestorage.googleapis.com/v0/b/rent-online-17b56.appspot.com/o/Property%2FR2022O619632%2F1660896856461.jpg?alt=media&token=4e29d61d-6935-40e8-9abd-a6799b9a81d9",
    "https://firebasestorage.googleapis.com/v0/b/rent-online-17b56.appspot.com/o/Property%2FR2022O619632%2F1660896856552.jpg?alt=media&token=42079e3e-eb1f-472b-9636-badbaf1e3d69",
    "https://firebasestorage.googleapis.com/v0/b/rent-online-17b56.appspot.com/o/Property%2FR2022O619632%2F1660896856641.jpg?alt=media&token=e11980d4-8159-4456-8b10-f8be522bf32b"
  ],
  "propertyLocation": [
    "turra pani road, Near Bandhan hotel , Ambikapur, Chhattisgarh",
    "23.155108499999997,83.1789932"
  ],
  "propertyPrice": 7500,
  "propertyType": "Flat",
  "restriction": null,
  "verified": true,
  "__collections__": {}
}
  return (
    <Container maxW={'6xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
        <Carousel 
             autoPlay={true}
             showArrows={true}
             showThumbs={false}
             infiniteLoop={true}
             interval={3000}
            //  transitionTime={1000}
           >
            {data.propertyImage && data.propertyImage.map((el) =>{
             return <div style={{height:"30rem",width:"100%",padding:"1rem 1rem 0 1rem"}} >
                  <img src={el} alt="pic" style={{height:"100%",width:"100%"}}/>
              </div>
            })}
          </Carousel>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Rent
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'4xl'}>
              ₹ {data.propertyPrice} / Month
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {/* {data.propertyDesc} */}
              </Text>
              <Text fontSize={'4xl'}>
              Address: {data.propertyDesc}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {/* <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List> */}
                {data.propertyFeatures.map((el) => {
                  return <Text key={el.propertyId}> {el}</Text>
                })}
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Property Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  propertyType:
                  </Text>{' '}
                  { data.propertyType}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  propertyFloor:
                  </Text>{' '}
                  { data.propertyFloor}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  propertyFor:
                  </Text>{' '}
                  { data.propertyFor}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  propertyFurnished:
                  </Text>{' '}
                  { data.propertyFurnished}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  propertyArea:
                  </Text>{' '}
                  { data.propertyArea}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  propertyContact:
                  </Text>{' '}
                  { data.propertyContact}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  propertyLocation:
                  </Text>{' '}
                  { data.propertyLocation.join(" ")}{' '}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Book Now
          </Button>

          {/* <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack> */}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}