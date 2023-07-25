"use client";

import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const Movies = ({ dt }) => {


    const router = useRouter();



    return (
        <Link href={`/movie/${dt?.id})`} className='w-[400px] relative cursor-pointer'>
            <Image width={400} height={300} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} />
            <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
                <div className='text-2xl font-bold'>
                    {dt?.title}
                </div>
                <div>
                    {dt?.release_date}- {dt?.vote_average}
                </div>

            </div>


        </Link>
    )
}

export default Movies