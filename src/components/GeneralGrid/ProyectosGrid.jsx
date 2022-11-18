import { Flex } from '@chakra-ui/react'
import { ProyectosCard } from './ProyectosCard'
import { proyectos } from '../../assets/datos'

const ProyectosGrid = () => {
  return (
    <Flex gap="5" my="10" wrap="wrap" justify="space-around">
      {proyectos.map((item) => (
        <ProyectosCard key={item.id} item={item} />
      ))}
    </Flex>
  )
}

export { ProyectosGrid }
