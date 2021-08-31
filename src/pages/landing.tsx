import { Box, Flex, Heading, Text, Link, Center, Button, useColorMode } from '@chakra-ui/react'
import { FaSpotify } from 'react-icons/fa'
import { authorize } from '../libs/spotify'
import { useAuth } from '../libs/use-auth'
import landingImage from '../assets/listening-happy-music-animate.svg'

const Landing = () => {
  const { colorMode } = useColorMode()
  useAuth()

  return (
    <Box maxW="100vw">
      <Flex as={'main'} minH="100vh" p={'2rem'} direction={'column'} justify={'center'} textAlign={'center'}>
        { landingImage }
        <Heading as={'h1'} fontSize={'6xl'}>Dengerim Musik Asik</Heading>
        <Text my={4} color={'gray.400'}>Tau gak dengerin musik bisa bikin mood kamu jadi lebih baik loh! Yuks bikin playlist kamu dari sini!</Text>
        <Box>
          <Button size={'lg'} leftIcon={<FaSpotify />} onClick={authorize}>Login with Spotify</Button>
        </Box>
      </Flex>
      <Flex as={'footer'} h={'10vh'} bg={colorMode === 'light' ? 'gray.300' : 'gray.800'}  alignContent={'flex-end'}>
        <Text mr={4}>Made with 💖 by Novan</Text>
        <Link href="https://storyset.com/people" isExternal>People illustrations by Storyset</Link>
      </Flex>
    </Box>
  )
}

export default Landing