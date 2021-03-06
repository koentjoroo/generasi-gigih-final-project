import {
  Box,
  Grid,
  Flex,
  Center,
  Heading,
  Text,
  Link,
  Button,
  Image,
  useColorMode,
  useBreakpointValue
} from '@chakra-ui/react'
import { FaSpotify } from 'react-icons/fa'
import { authorize } from '../libs/spotify'
import { useAuth } from '../libs/use-auth'
import landingImage from '../assets/listening-happy-music-animate.svg'

const Landing = () => {
  const { colorMode } = useColorMode()
  useAuth()

  const column = useBreakpointValue({ base: '1fr', md: '1fr 1fr'})
  const row = useBreakpointValue({ base: '1fr 1fr', md: '1fr'})

  return (
    <Box maxW="100vw">
      <Grid templateColumns={column} templateRows={row} gap={'1rem'}>
        <Center>
          <Image
            width={[300, 400, 500]}
            src={landingImage}
            alt="Listening Happy Music Animation"
          />
        </Center>
        <Flex
          as={'main'}
          minH="100vh"
          p={'2rem'}
          direction={'column'}
          justify={'center'}
        >
          <Heading as={'h1'} fontSize={'6xl'}>
            Dengerin Musik Asik
          </Heading>
          <Text my={4} color={'gray.400'}>
            Tau gak dengerin musik bisa bikin mood kamu jadi lebih baik loh!
            Yuks bikin playlist kamu dari sini!
          </Text>
          <Box>
            <Button size={'lg'} leftIcon={<FaSpotify />} onClick={authorize}>
              Login with Spotify
            </Button>
          </Box>
        </Flex>
      </Grid>
      <Center
        as={'footer'}
        h={'10vh'}
        bg={colorMode === 'light' ? 'gray.300' : 'gray.800'}
      >
        <Text mr={4}>Made with 💖 by Novan</Text>
        <Link href="https://storyset.com/people" isExternal>
          People illustrations by Storyset
        </Link>
      </Center>
    </Box>
  )
}

export default Landing
