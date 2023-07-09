import { 
      Box,
      Button,
      ButtonGroup,
      Card,
      CardBody,
      CardFooter,
      Divider,
      Flex,
      Grid,
      Heading,
      Image,
      Stack,
      Text,
    } from '@chakra-ui/react'
import React from 'react'

const ser_img = [
    {
        "img":"https://parsonsjoinery.com/wp-content/uploads/2016/09/The-difference-between-a-joiner-and-a-carpenter-1.jpg",
        "title":"Carpenter"
    },
    {
        "img":"https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg?w=2000",
        "title":"Electrician"
    },
    {
        "img":"https://images.squarespace-cdn.com/content/v1/58498d0e2e69cf7012febe04/1535046650560-DSAGWP5YTKV48SE9CJL1/Plumbing+Tools+for+any+home",
        "title":"Plumber"
    },
    {
        "img":"https://4.imimg.com/data4/OS/EA/MY-2627823/house-painting-work-500x500.jpg",
        "title":"Painting"
    }
]

const Service = () => {
  return (
    <Box p={10}>
        <Heading as="h1">Service</Heading>
        <Grid  gap={6} templateColumns={ 
            { 
                sm:'repeat(1, 1fr)',
                md:'repeat(2, 1fr)',
                xl:'repeat(4, 1fr)'
            }
            } >
         {
            ser_img.map((ele) => {
                return <Card  justify={"center"} maxH={"auto"} >
                <CardBody>
                  <Image
                    src={ele.img}
                    alt={ele.title}
                    borderRadius='lg'
                    h={"40%"}
                    w={"100%"}
                  />
                  <Stack mt='6' spacing='3' textAlign={"center"}>
                    <Heading size='md'>{ele.title}</Heading>
                    <Text fontSize={{ base: '14px', md: '14px', lg: '16px' }}>
                      This sofa is perfect for modern tropical spaces, baroque inspired
                      spaces, earthy toned spaces and for people who love a chic design with a
                      sprinkle of vintage design.
                    </Text>
                    <Divider />
                    <Divider />
                    <Button variant='solid' colorScheme='blue'>
                      View More
                    </Button>
                  </Stack>
                </CardBody>
              </Card>
            })
         }
         </Grid>
    </Box>
  )
}

export default Service


