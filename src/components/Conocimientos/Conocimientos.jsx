import { Flex, Heading, Image, Tooltip, VStack } from '@chakra-ui/react'
import { icons } from '../../assets/iconos'

const Conocimientos = () => {
  console.log(icons)
  return (
    <VStack>
      <Heading>Mis conocimientos</Heading>
      <Flex wrap="wrap" gap="4" justify="space-around" p="4">
        {icons.map((item, index) => (
          <Tooltip label={item.slice(19, -4)} key={index}>
            <Image className="transit" src={item} w="3em" m="4" />
          </Tooltip>
        ))}
      </Flex>
    </VStack>
  )
}

export { Conocimientos }
