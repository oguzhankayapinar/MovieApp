"use client";

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Tabs = () => {

    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

    const tabs = [
        {
            name: "Popüler Filmler",
            url: "popular"
        },
        {
            name: "Yeni Filmler",
            url: "latest"
        },
        {
            name: "Yakında Gelecek Filmler",
            url: "upcoming"
        }
    ]



    return (
        <div className='p-5 m-6 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
            {
                tabs.map((tab, i) => (
                    <Link key={i} className={`cursor-pointer hover:opacity-80 transition-opacitiy ${tab.url === genre ? "underline-offset-8 text-amber-600" : ""}`} href={`/?genre=${tab.url}`}> {tab.name}</Link>
                ))
            }
        </div>
    )
}

export default Tabs