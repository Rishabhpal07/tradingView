import Link from 'next/link'
import React from 'react'

function FotterLink({text,linkText,href}:FooterLinkProps) {
  return (
    <div className='flex m-4 items-center justify-center '>
       <div className='text-md p-2 text-gray-500'>{text}</div>
       <div className='text-sm flex items-center'>
       <Link href={href} className='footer-link' >{linkText}</Link>
       </div>
    </div>
  )
}

export default FotterLink
