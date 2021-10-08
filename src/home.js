import React from "react";
import {useEffect, useState} from 'react';
import api from './api';
import Jogo from './jogo';

function Home(){
    const [list,setList] = useState([]);
  var generos=["","horror","anime","racing","zombie","2d","social","fantasy","shooter","battle-royale",
    "action","strategy","sports","action-rpg","first-person","fighting","superhero","sci-fi","space","third-Person"]
  useEffect(()=>{ 
   async function carregar(){
      let l =await api.ListarJogos();
      setList(l);
      
    }
    carregar();
  },[]);
  const listargenero = async (e)=>{
    let l =await api.Generos(generos[e.target.id]);
    setList(l)
  }
  document.querySelectorAll('li').forEach((e,key)=>{e.setAttribute('id',key)});
  const geral = async()=>{
    let l =await api.ListarJogos();
     setList(l);
  }
  
  
    return<>
     <article>
          <nav id='nav'>
            
            <ul className="ul">
              <li onClick={ geral}>geral</li>
              <li  onClick={listargenero}>terror</li>
              <li  onClick={listargenero}>anime</li>
              <li  onClick={listargenero}>corrida</li>
              <li  onClick={listargenero}>zombie</li>
              <li  onClick={listargenero}>2d</li>
              <li  onClick={listargenero}>social</li>
              <li  onClick={listargenero}>fantasia</li>
              <li  onClick={listargenero}>tiro</li>
              <li  onClick={listargenero}>mundo aberto</li>
              <li  onClick={listargenero}>ação</li>
              <li  onClick={listargenero}>estrategia</li>
              <li  onClick={listargenero}>esporte</li>
              <li  onClick={listargenero}>ação rpg</li>
              <li  onClick={listargenero}>primeira pessoa</li>
              <li  onClick={listargenero}>luta</li>
              <li  onClick={listargenero}>super heroi</li>
              <li  onClick={listargenero}>ficção científica</li>
              <li  onClick={listargenero}> terceira pessoa</li>
            </ul>
          </nav>
          <section>
            {list.map((item,key)=>{
              return <Jogo title={item.title} thumbnail={item.thumbnail} genre={item.genre} key={key}/>
            })}
          </section>
      </article>
    </>
}
export default Home;