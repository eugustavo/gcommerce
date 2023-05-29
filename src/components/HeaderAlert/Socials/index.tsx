import Image from 'next/image'
import { HStack } from '@chakra-ui/react'

import facebookLogo from '@/assets/facebook.png'
import instagramLogo from '@/assets/instagram.png'
import twitterLogo from '@/assets/twitter.png'

export function Socials() {
  return (
    <HStack spacing={4}>
      <a
        href="https://www.instagram.com/gustavosoouza"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={instagramLogo} alt="Instagram" width={16} height={16} />
      </a>

      <a
        href="https://www.instagram.com/gustavosoouza"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={facebookLogo} alt="Facebook" width={16} height={16} />
      </a>

      <a
        href="https://www.twitter.com/sogustavo_"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={twitterLogo} alt="Twitter" width={16} height={16} />
      </a>
    </HStack>
  )
}
