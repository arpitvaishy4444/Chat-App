import {Box,Container, VStack,HStack,Input,Button} from '@chakra-ui/react'
import Message from './component/message';

 

function App() {
  return (
    <Box bg={"red.100"}>
      <Container  h={"100vh"} bg={"white"}>
        <VStack h="full">
          <Button colorScheme="red" w="full">logout</Button>

          <VStack h="full" w="full"  overflowY={'auto'}>
            <Message user="me" text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message user="me" text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message  user="me" text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message user="me" text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message user="me" text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message  user="me" text="This is sample message"></Message>
            <Message text="This is sample message"></Message>
            <Message user="me" text="This is sample message"></Message>
            <Message text="This is sample message"></Message>

</VStack>



          <form style={{width:"100%"}}>
            <HStack>
            <Input placeholder='Enter a message...'/>
            <Button colorScheme='purple' type='submit'>Send</Button>
            </HStack>
          </form>

        </VStack>
      </Container>
    </Box>  
    
  
  
  )}

export default App;
