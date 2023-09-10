import React from 'react'
import {HStack,Avatar,Text} from '@chakra-ui/react'

const Message = ({text,user="other"}) => {
  return (
    <HStack bg={'blackAlpha.100'} borderRadius={'100'} paddingX={'3'} paddingY={'1.5'} alignSelf={user==="me"?'flex-end':'flex-start'}>
      
      {
       user==='other' && <Avatar h={'8'} w={'8'}/>
        } 
        <Text>{text}</Text>
       {
       user==='me' && <Avatar h={'8'} w={'8'}/>
        } 


    </HStack>
    
  )
}

export default Message