import React from 'react'
import Link from 'next/link';
import { UrlObject } from 'url';


type Props = {
    href: string | UrlObject
    children: React.ReactNode
}

const NavItem = ({href, children}: Props) => {
  return (
    <Link href={href}>{children}</Link>
  )
}

export default NavItem