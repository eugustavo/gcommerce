import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

import usdFlag from '@/assets/usd-flag.png'

export function CurrencyMenu() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDown color="#fff" size="18px" />}
        bg="transparent"
        _hover={{ bg: '#384459' }}
      >
        <HStack>
          <Image
            src={usdFlag}
            alt="Bandeira da moeda USD"
            width={24}
            height={14}
          />
          <Text color="white" fontSize="12px">
            USD
          </Text>
        </HStack>
      </MenuButton>

      <MenuList bg="bgAlert">
        <MenuItem bg="transparent">
          <Text color="white" fontSize="12px">
            BRL
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
