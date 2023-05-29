import { Stack } from '@chakra-ui/react'
import { NavLink } from '../NavLink'
import { NavSection } from '../NavSection'

export function SidebarNav() {
  return (
    <Stack spacing={8} align="flex-start">
      <NavSection title="Women">
        <NavLink href="/">Fashion</NavLink>
        <NavLink href="/">Shoes</NavLink>
        <NavLink href="/">Bracelets</NavLink>
      </NavSection>

      <NavSection title="Men">
        <NavLink href="/">Fashion</NavLink>
        <NavLink href="/">Shoes</NavLink>
        <NavLink href="/">Bracelets</NavLink>
      </NavSection>
    </Stack>
  )
}
