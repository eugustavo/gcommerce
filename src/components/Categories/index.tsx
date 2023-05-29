import { Grid, HStack, VStack, useMediaQuery } from '@chakra-ui/react'

import { HeaderCategories } from './HeaderCategories'
import { CategoryCard } from './CategoryCard'

import petImg from '@/assets/categories/pet.png'
import fashionImg from '@/assets/categories/fashion.png'
import eletronicosImg from '@/assets/categories/eletronicos.png'
import casaImg from '@/assets/categories/casa.png'
import bikesImg from '@/assets/categories/bikes.png'
import maquiagensImg from '@/assets/categories/maquiagens.png'
import musicaImg from '@/assets/categories/musica.png'
import bebeImg from '@/assets/categories/bebe.png'
import presentesImg from '@/assets/categories/presentes.png'
import mercadoImg from '@/assets/categories/mercado.png'
import automoveisImg from '@/assets/categories/automoveis.png'
import bolsasImg from '@/assets/categories/bolsas.png'

const categories = [
  {
    id: 1,
    title: 'Fashion',
    image: fashionImg,
  },
  {
    id: 2,
    title: 'Eletrônicos',
    image: eletronicosImg,
  },
  {
    id: 3,
    title: 'Casa & Jardim',
    image: casaImg,
  },
  {
    id: 4,
    title: 'Bikes',
    image: bikesImg,
  },
  {
    id: 5,
    title: 'Música',
    image: musicaImg,
  },
  {
    id: 6,
    title: 'Maquiagens',
    image: maquiagensImg,
  },
  {
    id: 7,
    title: 'Pet',
    image: petImg,
  },
  {
    id: 8,
    title: 'Bebês',
    image: bebeImg,
  },
  {
    id: 9,
    title: 'Presentes',
    image: presentesImg,
  },
  {
    id: 10,
    title: 'Mercado',
    image: mercadoImg,
  },
  {
    id: 11,
    title: 'Automóveis',
    image: automoveisImg,
  },
  {
    id: 12,
    title: 'Bolsas',
    image: bolsasImg,
  },
]

const categoriesForResponsive = [
  {
    id: 1,
    title: 'Fashion',
    image: fashionImg,
  },
  {
    id: 2,
    title: 'Eletrônicos',
    image: eletronicosImg,
  },
  {
    id: 3,
    title: 'Casa & Jardim',
    image: casaImg,
  },
  {
    id: 4,
    title: 'Bikes',
    image: bikesImg,
  },
]

export function Categories() {
  const [isSmallerThan650] = useMediaQuery('(max-width: 650px)')

  return (
    <VStack w="full" pt={14} alignItems="center" justifyContent="center">
      <HStack
        w="full"
        maxW="1200px"
        alignItems="center"
        justifyContent="space-between"
        paddingX={12}
      >
        <HeaderCategories />
      </HStack>

      <Grid
        w="full"
        maxW="1200px"
        paddingX={12}
        templateColumns="repeat(auto-fill, minmax(170px, 1fr))"
        gap={4}
        pt={4}
      >
        {isSmallerThan650
          ? categoriesForResponsive.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                image={category.image}
              />
            ))
          : categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                image={category.image}
              />
            ))}
      </Grid>
    </VStack>
  )
}
