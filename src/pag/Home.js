import { useState, useEffect } from 'react'

function Home() {
  const [anim, setAnim] = useState()
  const anime = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'be89b80eecmsh5392cb343372becp1ddd72jsn2acf5b35f933',
        'X-RapidAPI-Host': 'animes3.p.rapidapi.com'
      }
    };
    const url = 'https://animes3.p.rapidapi.com/'
    const response = await fetch(url, options)
    const obj = await response.json()
    setAnim(obj.map(e => <div  className='d-flex flex-column justify-content-centre align-items-center' key={e.id}>{e.title}<br /><img  width={'250px'} key={e.id} src={e.img} /></div>))


  }
  useEffect(() => {
    anime()
  })
  return (
    <>
        {anim}
        </>
      )
}

      export default Home