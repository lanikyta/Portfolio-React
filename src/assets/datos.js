import { portada1, portada2, portada3, portada4 } from '.'

export const proyectos = [
  {
    id: 1,
    path: '/adm-ventas',
    name: 'Administrador de Ventas',
    description:
      'Un bonito y util administrador de ventas (como su nombre lo indica) que preparé como Proyecto n° 2 para ADA 💻 \n Cuenta con una sección para reportes de sucursales, una sección para productos y vendedoras destacadas y la ultima sección para la tabla que detalla las ventas realizadas donde se puede agregar, editar y eliminar. Se pueden obtener muchos mas datos dependiendo de los requerimientos y lo que se quiera mostrar como información.',
    lenguajes: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://lanikyta.github.io/Administrador-de-Ventas/',
    image: portada2,
  },
  {
    id: 2,
    path: '/jobs',
    name: 'Tablero de ofertas laborales',
    description:
      'Un tablero de trabajos donde puedes colgar tus propuestas laborales para ofrecerlas! Lo preparé como Proyecto n° 3 para ADA 💻 \n Cuenta con un tablero donde encontraremos todos los trabajos publicados, un buscador que filtra por category, seniority y location y botones para crear y volver a la pagina principal.',
    lenguajes: ['HTML5', 'Sass', 'JavaScript'],
    link: 'https://lanikyta.github.io/Saas-Proyect-Jobs/',
    image: portada3,
  },
  {
    id: 3,
    path: '/funko-store',
    name: 'Funko Store',
    description:
      'Una tienda de ventas (e-commerce) que preparé como Proyecto Final para ADA ITW 💻 \n Es una página para venta de Funko Pops. Puedes filtrar entre todas las categorías existentes, por rango de precio y tambien encontrar alguno en específico. Puedes crear tu cuenta, realizar una compra y luego ver las compras realizadas. Se pueden agregar muchas mas productos (desde el back) y todo se generará automaticamente segun las cargado en el backEnd',
    lenguajes: ['React.js', 'Chakra UI'],
    link: 'https://lanikyta.github.io/Saas-Proyect-Jobs/',
    image: portada1,
  },
  {
    id: 4,
    path: '/cine-app',
    name: 'Cine App',
    description:
      'Una app de películas que preparé como un challenge 💻 \n Es una página para busqueda de películas populares. Puedes filtrar por raiting y tambien encontrar alguna en específico. La app funciona con peticiones a la api de TheMovieDB.',
    lenguajes: ['React.js', 'Chakra UI'],
    link: 'https://challenge-cine-react.netlify.app/',
    image: portada4,
  },
]
