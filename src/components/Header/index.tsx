import Image from 'next/image'
import Head from 'next/head'
import { Box, HStack, Text } from '@chakra-ui/react'

import { Logo } from '../Logo'

import userIcon from '@/assets/user-icon.png'
import cartIcon from '@/assets/cart-icon.png'

interface HeaderProps {
  headerTitle: string
}

export function Header({ headerTitle }: HeaderProps) {
  return (
    <HStack
      w="full"
      h="80px"
      bg="bgHeader"
      alignItems="center"
      justifyContent="center"
    >
      <Head>
        <title>{headerTitle}</title>
      </Head>

      <HStack
        w="full"
        maxW="1200px"
        alignItems="center"
        justifyContent="space-between"
        paddingX={12}
        paddingY={8}
      >
        <Box as="a" href="/">
          <Logo />
        </Box>

        <HStack spacing={6}>
          <Box cursor="pointer">
            <Image
              src={userIcon}
              alt="Icone do usuário"
              width={24}
              height={24}
            />
          </Box>

          <Box cursor="pointer" display="flex">
            <Image
              src={cartIcon}
              alt="Icone do carrinho"
              width={24}
              height={24}
            />

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="bgPink"
              borderRadius="full"
              color="white"
              padding={1}
              position="relative"
              right="10px"
              w="18px"
              h="18px"
            >
              <Text fontSize="12px" fontWeight="semibold">
                2
              </Text>
            </Box>
          </Box>
        </HStack>
      </HStack>
    </HStack>
  )
}
