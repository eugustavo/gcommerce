import { HStack, Heading, Text, useMediaQuery } from '@chakra-ui/react'

import { CategoriesIcon } from '../CategoriesIcon'
import { ChevronRight } from 'lucide-react'
import { useSidebarDrawer } from '@/context/SidebarDrawerContext'

export function HeaderCategories() {
  const [isSmallerThan650] = useMediaQuery('(max-width: 650px)')
  const { onOpen } = useSidebarDrawer()

  return (
    <>
      <HStack alignItems="center">
        <CategoriesIcon />

        <Heading fontSize="25px" fontWeight="bold">
          Categorias
        </Heading>
      </HStack>

      {isSmallerThan650 && (
        <HStack
          as="button"
          onClick={onOpen}
          spacing={1}
          mt={2}
          alignItems="center"
          cursor="pointer"
        >
          <Text fontSize="14px" color="textLow" mt="-3px">
            Ver todas
          </Text>

          <ChevronRight color="#B3BED0" size={16} />
        </HStack>
      )}
    </>
  )
}
