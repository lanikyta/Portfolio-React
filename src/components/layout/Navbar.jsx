import { Link as RouterLink } from 'react-router-dom'
import {
  Heading,
  IconButton,
  Spacer,
  Flex,
  Link,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  Button,
  ButtonGroup,
  useColorMode,
} from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import '../../App.css'
import { GoHome } from 'react-icons/go'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [menu] = useMediaQuery('(min-width: 460px)')

  return (
    <Flex
      direction="row"
      px="4"
      py="2"
      align="center"
      alignContent="center"
      className="navbar"
    >
      {menu ? (
        <>
          <Image ml="3" w="80px" m="2" />
          <Heading m="1" fontSize="2xl" color="pink.700">
            Aylen Cruz
          </Heading>
          <IconButton
            as={RouterLink}
            to="/"
            icon={<GoHome />}
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
          />

          <Spacer></Spacer>
          <Flex gap="2">
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              colorScheme="teal"
              variant="ghost"
            />
            <ButtonGroup>
              <Button
                as={RouterLink}
                to="/proyectos"
                colorScheme="teal"
                variant="outline"
              >
                Mis Proyectos
              </Button>
            </ButtonGroup>
          </Flex>
        </>
      ) : (
        <Flex m="1" direction="row" alignItems="center" w="100vw">
          <Menu>
            <MenuButton
              colorScheme="red"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem as={RouterLink} to="/profile">
                Profile
              </MenuItem>
              <MenuItem>Sign Out</MenuItem>

              <MenuItem>Log in</MenuItem>
            </MenuList>
          </Menu>
          <IconButton
            as={RouterLink}
            to="/"
            icon={<GoHome />}
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
          />
          <Link
            as={RouterLink}
            mx="2"
            fontSize="xl"
            to="/products"
            color="whiteAlpha.800"
          >
            Store
          </Link>
          <Spacer></Spacer>
          {/* <IconButton
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            colorScheme="teal"
            variant="ghost"
          /> */}
        </Flex>
      )}
    </Flex>
  )
}

export { Navbar }
