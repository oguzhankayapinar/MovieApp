import Movies from '@/app/components/Movies/Movies';
import React from 'react'

const Page = async ({ params }) => {

    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=210558e789247e3850dc99302c071e84&query=${keyword}&language=en-US&include_adult=false`)

    const data = await res.json()

    return (
        <div>
            {
                !data?.results
                    ?
                    <div>Film bulunamadı </div>

                    :
                    <div className='flex items-center flex-wrap gap-3'>

                        {data?.results?.map((dt, i) => (
                            <Movies key={i} dt={dt} />
                        ))
                        }
                    </div>
            }
        </div>
    )
}

export default Page