import Link from "next/link"
import * as Icons from "@parts/icons/index"
import cn from "classnames"
import { Icon_Instagram, Icon_Website } from "@parts/icons/index"

interface SocialIconProps {
  href: string
  iconName: string
  children: React.ReactNode
}

const SocialIcon = ({ iconName, href, children }: SocialIconProps) => {
  return (
    <Link hrefLang='en-US' href={href} className='cursor-pointer mx-1 block'>
      <i
        className={cn(
          "cursor-pointer block transform-gpu transition duration-700 ease-in-out hover:-translate-y-2 text-coral hover:text-opacity-75 text-xl"
        )}
        role='img'
        aria-label={iconName}
      >
        {children}
      </i>
    </Link>
  )
}

interface Props {
  href: string
  iconName: string
}

export const Instagram = ({ iconName, href }: Props) => {
  return (
    <SocialIcon iconName={iconName} href={href}>
      <Icon_Instagram />
    </SocialIcon>
  )
}

export const Website = ({ iconName, href }: Props) => {
  return (
    <SocialIcon iconName={iconName} href={href}>
      <Icon_Website />
    </SocialIcon>
  )
}

export const LinkedIn = ({ iconName, href }: Props) => {
  return (
    <SocialIcon iconName={iconName} href={href}>
      <Icons.Icon_LinkedIn />
    </SocialIcon>
  )
}

export const GitHub = ({ iconName, href }: Props) => {
  return (
    <SocialIcon iconName={iconName} href={href}>
      <Icons.Icon_Github />
    </SocialIcon>
  )
}

export const Email = ({ iconName, href }: Props) => {
  return (
    <SocialIcon iconName={iconName} href={href}>
      <Icons.Icon_Envelope />
    </SocialIcon>
  )
}
