import React from 'react'
import {
  Box, 
  Container, 
  Text,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from "@chakra-ui/react"
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
       <Box 
        display={'flex'}
        justifyContent={'center'}
        padding={3}
        bg={"white"}
        width={"100%"}
        margin={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
       >
          <Text fontSize={"4xl"} fontFamily={"Work sans"} color={"black"}>Chat With Friends</Text>
       </Box>
       <Box bg="white" width={"100%"} padding={4} borderRadius={"lg"} borderWidth={"1px"}>
       <Tabs variant='soft-rounded'>
          <TabList marginBottom={'1em'}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
                <Login />
            </TabPanel>
            <TabPanel>
                <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
       </Box>
    </Container>
  )
}

export default HomePage
