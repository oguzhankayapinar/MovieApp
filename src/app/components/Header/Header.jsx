"use client";

import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import MenuItem from '../MenuItem'
import ThemeComp from '../Theme/ThemeComp'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Header = () => {

  const [keyword, setKeyWord] = useState("")

  const router = useRouter();

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

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`)
      setKeyWord("");
    }
  }

  return (

    <div className='flex items-center gap-10 h-20 p-5'>
      <Link href="/" className='bg-blue-900 rounded-lg p-3 text-2xl font-bold' >
        MovieApp
      </Link>
      <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
        <input value={keyword} onKeyDown={searchFunc} onChange={e => setKeyWord(e.target.value)} placeholder='Arama Yapınız' className='cursor-pointer outline-none flex-1 bg-transparent ' type="text" />
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