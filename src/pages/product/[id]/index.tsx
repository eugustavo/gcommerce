import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Spinner,
  Text,
  VStack,
  useDisclosure,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChevronLeft } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Header } from '@/components/Header'
import { HeaderAlert } from '@/components/HeaderAlert'
import { Alert } from '@/components/Alert'
import { Product as ProductProps } from '@/pages'

import { api } from '@/services/api'

export default function Product() {
  const [product, setProduct] = useState<ProductProps>({} as ProductProps)
  const [loading, setLoading] = useState(false)

  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)')
  const [isSmallerThan400] = useMediaQuery('(max-width: 400px)')

  const { isOpen, onOpen, onClose } = useDisclosure()

  const cancelRef = useRef(null)
  const toast = useToast()
  const router = useRouter()

  async function handleDeleteProduct() {
    try {
      await api.delete(`/products/${router.query.id}`)

      toast({
        title: 'Produto deletado!',
        description: `O produto "${product.name}" foi deletado com sucesso.`,
        status: 'success',
        isClosable: true,
        position: 'top',
      })

      router.push('/')
    } catch (err) {
      toast({
        title: 'Erro ao deletar produto',
        description:
          'Ocorreu um erro ao deletar produto, tente novamente mais tarde.',
        status: 'error',
        isClosable: true,
        position: 'top',
      })
    }
  }

  useEffect(() => {
    async function loadProduct() {
      setLoading(true)

      if (!router.query.id) return

      try {
        const response = await api.get(`/products/${router.query.id}`)

        setProduct(response.data)
      } catch (err) {
        toast({
          title: 'Erro ao carregar produto',
          description:
            'Ocorreu um erro ao carregar produto, tente novamente mais tarde.',
          status: 'error',
          isClosable: true,
        })
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [router.query.id, toast])

  return (
    <VStack flex={1} w="100vw" h="100vh" spacing={0} overflowY="auto">
      <HeaderAlert />

      <Header />

      {loading ? (
        <Center flex={1}>
          <Spinner color="#2B3445" size="lg" />
        </Center>
      ) : (
        <HStack
          w="full"
          h="full"
          p={8}
          spacing={0}
          flexDirection={isSmallerThan800 ? 'column' : 'row'}
          justifyContent={isSmallerThan800 ? 'center' : 'space-between'}
          alignItems="center"
        >
          <Box
            h="full"
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={isSmallerThan800 ? 4 : 0}
            mr={isSmallerThan800 ? 0 : 4}
            mt={isSmallerThan400 ? 14 : 0}
          >
            <Image
              src={product.image}
              width={500}
              height={500}
              alt="Foto do produto"
              style={{
                borderRadius: 4,
              }}
            />
          </Box>

          <Box
            bg="white"
            rounded="md"
            h="full"
            w="full"
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box mb={12}>
              <HStack
                as="a"
                href="/"
                spacing={1}
                alignItems="center"
                mb={8}
                cursor="pointer"
              >
                <ChevronLeft size={18} color="#7D879C" />
                <Text fontSize="14px" color="textLow">
                  Voltar
                </Text>
              </HStack>

              <HStack
                alignItems="center"
                justifyContent="space-between"
                mb={4}
                spacing={2}
              >
                <Heading fontSize="24px">{product.name}</Heading>

                <Text fontSize="16px" fontWeight="bold">
                  {product?.price?.toLocaleString('en-us', {
                    currency: 'USD',
                    style: 'currency',
                  })}
                </Text>
              </HStack>

              <Text fontSize="14px" color="textLow">
                {product.description}
              </Text>
            </Box>

            <VStack spacing={2}>
              <Button w="full" paddingY={6} colorScheme="green">
                Adicionar ao carrinho
              </Button>

              <Button w="full" paddingY={6} colorScheme="red" onClick={onOpen}>
                Excluir
              </Button>
            </VStack>
          </Box>
        </HStack>
      )}

      <Alert
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleDeleteProduct}
        cancelRef={cancelRef}
        title="Deletar produto?"
        description="Você tem certeza que deseja deletar esse produto? Essa ação não poderá ser desfeita."
      />
    </VStack>
  )
}
