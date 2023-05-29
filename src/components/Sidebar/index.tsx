import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton mt="3" />
        <DrawerHeader fontWeight="bold">Categorias</DrawerHeader>

        <DrawerBody>
          <SidebarNav />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
