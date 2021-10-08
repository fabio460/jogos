const api  ={
    ListarJogos:async ()=>{
      let req = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
             "method": "GET",
             "headers": {
                 "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                 "x-rapidapi-key": "06fd7a4a17msh212607c1bb55bb1p1d92ebjsn2362ecf5e5d8"
             }
         })
      let j = req.json();
      return j;   
     }
}
export default api;