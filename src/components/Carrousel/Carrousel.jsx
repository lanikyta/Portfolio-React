import { Box, Image, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import Slider from 'react-slick'
import { proyectos } from '../../assets/datos'

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Box w={['80%', null, null, '100%', '100%']} mx="auto" my="10">
      <Slider {...settings}>
        {proyectos.map((elem) => (
          <LinkBox key={elem.id}>
            <LinkOverlay href={elem.link} isExternal>
              <Image w="100" src={elem.image} maxH="40em" />
            </LinkOverlay>
          </LinkBox>
        ))}
      </Slider>
    </Box>
  )
}
export { Carrousel }
