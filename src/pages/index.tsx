import { useEffect, useState } from 'react'
import {
  Grid,
  HStack,
  Heading,
  Spinner,
  VStack,
  useToast,
} from '@chakra-ui/react'

import { Categories } from '@/components/Categories'
import { Header } from '@/components/Header'
import { HeaderAlert } from '@/components/HeaderAlert'
import { ProductCard } from '@/components/ProductCard'
import { Sidebar } from '@/components/Sidebar'

import { api } from '@/services/api'

export interface Product {
  id: number
  name: string
  description: string
  category: string
  price: number
  image: string
  rating_stars: number
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  const toast = useToast()

  useEffect(() => {
    async function loadProducts() {
      setLoading(true)

      try {
        const response = await api.get('/products')

        setProducts(response.data)
      } catch (err) {
        toast({
          title: 'Erro ao carregar produtos',
          description:
            'Ocorreu um erro ao carregar os produtos, tente novamente mais tarde.',
          status: 'error',
          isClosable: true,
          position: 'top',
        })
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [toast])

  return (
    <VStack flex={1} w="100vw" h="100vh" spacing={0} overflowY="auto" pb={12}>
      <HeaderAlert />

      <Header headerTitle="GCommerce" />

      <Categories />

      <HStack py={24}>
        <Heading fontSize="24px">Produtos Mais Vendidos</Heading>
      </HStack>

      {loading ? (
        <Spinner color="#2B3445" size="lg" />
      ) : (
        <Grid
          w="full"
          maxW="1200px"
          paddingX={12}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gap={4}
          pt={2}
          justifyItems="center"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              rating={product.rating_stars}
            />
          ))}
        </Grid>
      )}

      <Sidebar />
    </VStack>
  )
}
