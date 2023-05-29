import Image from 'next/image'
import { Rating } from '@smastrom/react-rating'
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'

import { useState } from 'react'
import { Eye, Heart } from 'lucide-react'

interface ProductCardProps {
  id: number
  name: string
  category: string
  price: number
  image: string
  rating: number
}

export function ProductCard({
  id,
  name,
  category,
  price,
  image,
  rating,
}: ProductCardProps) {
  const [visible, setVisible] = useState(false)

  return (
    <VStack
      as="a"
      p={2}
      alignItems="center"
      justifyContent="center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      href={`product/${id}`}
      height="350px"
      maxHeight="350px"
      maxWidth="350px"
    >
      <VStack>
        <Image
          src={image}
          width={230}
          height={230}
          alt="Image do produto"
          style={{
            marginBottom: visible ? -44 : 0,
            borderRadius: 4,
          }}
        />

        {visible && (
          <Box w="full">
            <Button
              p={2}
              mb={-24}
              bg="bgAlert"
              w="full"
              _hover={{ bg: '#384459' }}
            >
              <Text color="white" fontSize="14px" fontWeight="semibold">
                Quick View
              </Text>
            </Button>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="white"
              borderRadius="full"
              color="white"
              padding={1}
              position="relative"
              right="-190px"
              top="-155px"
              w="32px"
              h="32px"
            >
              <Eye size={16} color="#7D879C" />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="white"
              borderRadius="full"
              color="white"
              padding={1}
              position="relative"
              right="-190px"
              top="-145px"
              w="32px"
              h="32px"
            >
              <Heart size={16} color="#7D879C" />
            </Box>
          </Box>
        )}
      </VStack>

      <VStack spacing={0} pt={visible ? -8 : 0} w="full">
        <Text fontSize="12px" color="textLow">
          {category}
        </Text>

        <Text pb={2} fontSize="14px" fontWeight="bold">
          {name}
        </Text>

        <Text fontSize="16px" fontWeight="bold">
          {price.toLocaleString('en-us', {
            currency: 'USD',
            style: 'currency',
          })}
        </Text>
      </VStack>

      <HStack pt={1}>
        <Rating
          value={rating}
          readOnly
          style={{
            maxWidth: '80px',
          }}
        />

        <Text fontSize="12px" color="textLow">
          (12 Reviews)
        </Text>
      </HStack>
    </VStack>
  )
}
