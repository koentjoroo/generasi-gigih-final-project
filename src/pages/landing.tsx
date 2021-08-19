import { Box, Flex, Heading, Text, Center, Button, useColorMode } from '@chakra-ui/react'
import { FaSpotify } from 'react-icons/fa'
import { authorize } from '../libs/spotify'
import { useAuth } from '../libs/use-auth'

const Landing = () => {
  const { colorMode } = useColorMode()
  useAuth()

  return (
    <Box maxW="100vw">
      <Flex as={'main'} minH="100vh" p={'2rem'} direction={'column'} justify={'center'} textAlign={'center'}>
        <Heading as={'h1'} fontSize={'6xl'}>Dengerim Musik Asique</Heading>
        <Text my={4} color={'gray.400'}>Tau gak dengerin musik bisa bikin blablabla. Skuy bikin playlist kamu dari sini!</Text>
        <Box>
          <Button size={'lg'} leftIcon={<FaSpotify />} onClick={authorize}>Login with Spotify</Button>
        </Box>
      </Flex>
      <Center as={'footer'} h={'10vh'} bg={colorMode === 'light' ? 'gray.300' : 'gray.800'}>Made with 💖 by Novan</Center>
    </Box>
  )
}

export default Landing