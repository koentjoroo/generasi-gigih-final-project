import { Box, Flex, Grid, Heading, Text, Center, Image, Button } from '@chakra-ui/react'
// import { FaSpotify } from 'react-icons/fa'

function App() {
  return (
    <Box maxW="100vw" p="2rem">
      <Flex justify={'space-between'} align={'center'}>
        <Text fontSize={'xl'} fontWeight={900}>GenGIGIH</Text>
        <Button>Login with Spotify</Button>
      </Flex>
      <Grid templateColumns="1fr 1fr" gap="5vw" minH="100vh">
        <Flex direction={'column'} justify={'center'}>
          <Heading as={'h1'} fontSize={'6xl'}>Dengerim Musik Asek Lorem Ipsum Dot Color Si Aemt</Heading>
          <Text my={4} color={'gray.400'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius similique nobis atque fuga, quasi omnis odit sunt placeat magni voluptate ratione incidunt quas ad blanditiis, soluta vitae aut velit. Magni.</Text>
          <Box>
            <Button size={'lg'}>Login with Spotify</Button>
          </Box>
        </Flex>
        <Center>
          <Image src={'https://picsum.photos/500'} />
        </Center>
      </Grid>
    </Box>
  );
}

export default App;
