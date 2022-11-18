import { Box, Heading } from '@chakra-ui/react'
import { ProyectosGrid } from '../components/GeneralGrid/ProyectosGrid'
const Proyectos = () => {
  return (
    <Box textAlign="center" my="10" w="80%" mx="auto">
      <Heading fontFamily="body">Mis proyectos</Heading>
      <ProyectosGrid />
    </Box>
  )
}

export { Proyectos }
