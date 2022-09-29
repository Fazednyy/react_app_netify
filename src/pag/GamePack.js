import { useState, useEffect } from 'react';
function Blogs() {
  const [Games, setGames] = useState()
  const Game = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'be89b80eecmsh5392cb343372becp1ddd72jsn2acf5b35f933',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
    const response = await fetch(url, options);
    const obj = await response.json()
    setGames(obj.map(e => <div key={e.id}><a className='game' key={e.id} href={e.game_url}>{e.title}</a><br/><img key={e.id} src={e.thumbnail}/></div>))
  }
useEffect(()=>{
  Game()
})

  return (
    <div className ='d-flex flex-column justify-content-centre align-items-center'>
      <div className='box'>{Games}</div>
    </div>
  )
}
export default Blogs
