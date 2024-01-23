import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href={'/'} className='text-gray-900 text-lg font-extrabold tracking-wider'>
    <span className='text-violet-600 font-bold text-2xl'>BLOG</span>
    {"HUB"}
    </Link>
  )
}
