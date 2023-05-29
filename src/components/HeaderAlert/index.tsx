import { HStack, Text, useMediaQuery } from '@chakra-ui/react'
import { Badge } from './Badge'
import { Socials } from './Socials'
import { CurrencyMenu } from './CurrencyMenu'

export function HeaderAlert() {
  const [isSmallerThan550] = useMediaQuery('(max-width: 550px)')

  return (
    <HStack w="full" bg="bgAlert" alignItems="center" justifyContent="center">
      <HStack
        w="full"
        maxW="1200px"
        alignItems="center"
        paddingX={12}
        pt={isSmallerThan550 ? 4 : 0}
        justifyContent={isSmallerThan550 ? 'center' : 'space-between'}
        flexDir={isSmallerThan550 ? 'column' : 'row'}
        spacing={isSmallerThan550 ? -2 : 0}
      >
        <HStack alignItems="stretch">
          <Badge title="HOT" />

          <Text color="white" fontSize="14px">
            Frete grátis em todo site
          </Text>
        </HStack>

        <HStack marginStart={0} alignItems="center">
          <CurrencyMenu />
          <Socials />
        </HStack>
      </HStack>
    </HStack>
  )
}
