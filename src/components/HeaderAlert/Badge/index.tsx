import { Box, Heading } from '@chakra-ui/react'

interface BadgeProps {
  title: string
}

export function Badge({ title }: BadgeProps) {
  return (
    <Box
      h="22px"
      w="46px"
      borderRadius={16}
      bg="bgPink"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        fontSize="12px"
        fontWeight="bold"
        color="white"
        textTransform="uppercase"
      >
        {title}
      </Heading>
    </Box>
  )
}
