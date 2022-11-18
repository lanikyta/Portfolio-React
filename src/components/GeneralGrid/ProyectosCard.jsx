import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'

const ProyectosCard = ({ item }) => {
  return (
    <LinkBox width="25em" textAlign="center">
      <VStack className="transit" justify="space-between" p="4">
        <Box h="5em" m="2">
          <Heading>
            <LinkOverlay href={item.link} isExternal>
              {item.name}{' '}
            </LinkOverlay>
          </Heading>
        </Box>
        <Image src={item.image} />
        <Text>{item.description}</Text>
      </VStack>
    </LinkBox>
  )
}

export { ProyectosCard }
