import { Link, Text, LinkProps } from '@chakra-ui/react'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends LinkProps {
  children: string
  href: string
}

export function NavLink({ children, href = '', ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <Link display="flex" align="center" px="4" py="1" rounded="md" {...rest}>
        <Text color="#2B3445" fontSize="14px">
          {children}
        </Text>
      </Link>
    </ActiveLink>
  )
}
