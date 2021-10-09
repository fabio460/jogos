import React from "react";
import { useHistory } from "react-router";
import {useDispatch} from 'react-redux';
function Jogo({title,thumbnail,genre,objeto}){
   const h = useHistory();
   const mostrarSelect = ()=>{
      h.push('/select')
      dispetch({
         type:'yes',
         payload:{lista:objeto}
      })
      
   }
   const dispetch = useDispatch(); 
    return<>
       <div onClick={mostrarSelect} className='bloco_jogo'>
         <div className='titulo'>{title}</div>
         <img src={thumbnail} alt=''/>
         <div>{genre}</div>
       </div>
    </>
}

export default Jogo;