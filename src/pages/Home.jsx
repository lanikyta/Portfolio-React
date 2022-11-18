import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { aylen, girl } from '../assets'
import { Link as RouterLink } from 'react-router-dom'
import { Carrousel } from '../components/Carrousel/Carrousel'
import { Conocimientos } from '../components/Conocimientos/Conocimientos'

const Home = () => {
  return (
    <Grid
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={2}
      paddingBottom="2"
    >
      <GridItem
        rowSpan={1}
        colSpan={2}
        bgImage={girl}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
      ></GridItem>
      <GridItem rowSpan={2} colSpan={2} p="4">
        <Flex>
          <Conocimientos w="25%" />

          <Box p="4" w="45%">
            <Badge colorScheme="purple" as={RouterLink} to="/proyectos">
              Ver todos mis proyectos
            </Badge>
            <Carrousel />
          </Box>
          <Box w="25%" bg="whiteAlpha.600" m="2" p="8" borderRadius="lg">
            <Image src={aylen} h="15em" mx="auto" borderRadius="10" my="2" />
            <Text>
              Mi nombre es Aylen, soy de argentina, tengo 28 años. Me
              desenvuelvo muy bien en el mundo It, se me facilita mucho. Soy de
              aprendizaje rápido y la verdad disfruto programar y resolver cada
              desafío que se me presenta! Actualmente me encuentro en búsqueda
              laboral mientras sigo ampliando conocimientos tanto de front como
              de back end. Soy proactiva y autodidacta, me caracterizo por
              asumir el rol de líder en los equipos de trabajo y siempre apoyo a
              mis compañeros en todo lo que esté a mi alcance. Estoy ansiosa por
              tener la oportunidad de demostrar mis habilidades :D
            </Text>
          </Box>
        </Flex>
      </GridItem>
      <GridItem rowSpan={2} colSpan={2}>
        <Stack textAlign="center">
          <AspectRatio width="35%" mx="auto" bg="beige">
            <iframe src="https://lanikyta.github.io/Portfolio/"></iframe>
          </AspectRatio>
          <Heading>Mi primer portfolio</Heading>
          <Text>
            Este es el primer portfolio que hice, podrá parecer un poco infantil
            pero siempre le tendré cariño! Puedes verlo{' '}
            <Link href="https://lanikyta.github.io/Portfolio/" isExternal>
              aquí
            </Link>
          </Text>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export { Home }
