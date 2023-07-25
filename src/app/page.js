import Image from 'next/image'
import Movies from './components/Movies/Movies'

export default async function Home({ searchParams }) {

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=210558e789247e3850dc99302c071e84`,
    { next: { revalidate: 10000 } })

  const data = await res.json()

  // console.log(data, "data")

  return (
    <main className="flex justify-center items-center flex-wrap gap-3">
      {
        data?.results?.map((dt, i) => (
          <Movies key={i} dt={dt} />
        ))
      }
    </main>
  )
}
