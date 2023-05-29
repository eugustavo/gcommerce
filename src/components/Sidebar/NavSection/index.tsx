import { ReactNode } from 'react'
import { Stack, Box, Text } from '@chakra-ui/react'

interface NavSectionProps {
  title: string
  children: ReactNode
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="16px">
        {title}
      </Text>
      <Stack spacing="1" mt="2" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}
