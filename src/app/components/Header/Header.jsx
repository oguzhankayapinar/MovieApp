import React from 'react'
import { BiSearch } from 'react-icons/bi'
import MenuItem from '../MenuItem'
import ThemeComp from '../Theme/ThemeComp'
import Link from 'next/link'

const Header = () => {

  const menu = [
    {
      name: "Hakkımızda",
      url: "/hakkimizda"
    },
    {
      name: "Üye Ol",
      url: "/uyeol"
    },
  ]

  return (

    <div className='flex items-center gap-10 h-20 p-5'>
      <Link href="/" className='bg-blue-900 rounded-lg p-3 text-2xl font-bold' >
        MovieApp
      </Link>
      <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
        <input placeholder='Arama Yapınız' className='outline-none flex-1 bg-transparent ' type="text" />
        <BiSearch size={25} />
      </div>

      <ThemeComp />


      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i} />
      ))}

    </div>
  )
}

export default Header