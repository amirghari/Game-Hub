import {
  FaWindows,
  FaLinux,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaAndroid,
} from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs'
import { BsNintendoSwitch } from 'react-icons/bs'
import { MdPhoneIphone } from 'react-icons/md'
import { Platform } from '../Hooks/useGame'
import { Icon, HStack } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
  platform: Platform[]
}

const IconsComponent = ({ platform }: Props) => {
  const iconMapping: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    xbox: FaXbox,
    playstation: FaPlaystation,
    mac: FaApple,
    android: FaAndroid,
    nintendo: BsNintendoSwitch,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }

  return (
    <>
      <HStack>
        {platform.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMapping[platform.slug]}
            color={'gray.500'}
          />
        ))}
      </HStack>
    </>
  )
}

export default IconsComponent
