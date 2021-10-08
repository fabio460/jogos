
import './App.css';
import {useEffect, useState} from 'react';
import api from './api';
import Jogo from './jogo';
function App() {
  const [list,setList] = useState([]);
  useEffect(()=>{
   async function carregar(){
      let l =await api.ListarJogos();
    setList(l)
    }
    carregar()
  },[]);
  
  console.log(list)
  return (
    <div className="">
      <header > </header>
      <section>
         {list.map((item,key)=>{
          return <Jogo title={item.title} thumbnail={item.thumbnail}/>
         })}
      </section>
    </div>
  );
}

export default App;
