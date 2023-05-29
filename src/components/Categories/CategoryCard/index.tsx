import { HStack, Text } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'

interface CategoryCardProps {
  title: string
  image: StaticImageData
}

export function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <HStack
      bg="white"
      padding={2}
      rounded="lg"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image
        quality={100}
        src={image}
        alt="Image da categoria"
        style={{ borderRadius: 10 }}
      />

      <Text fontSize="14px" fontWeight="semibold">
        {title}
      </Text>
    </HStack>
  )
}
