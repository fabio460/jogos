import React, { useEffect } from "react";
import { useHistory } from "react-router";
import {useSelector} from 'react-redux';
function Select(){
    let h = useHistory();
    const obj = useSelector(state=>state.jogo.lista);
    
    let voltar = ()=>{
        console.log(obj.title)
        if (obj.title) {
            h.push('/');
        }
        else{
            h.push('/select');
        }
        
    }
    useEffect(()=>{
        if (!obj.title) {
            h.push('/');
        }
        
    })
    return <>
        <div className='selectContainer'>
            <img src={obj.thumbnail} alt=''/>
            <div className='selectAside'>
                <h1>{obj.title}</h1>
                <div>lançamento: {' '+obj.release_date}</div>
                <div>{'desenvolvido por: '+obj.developer}</div>
                <div>{'plataforma: '+obj.platform}</div>
                <div>{'genero: '+obj.genre}</div>
                <div>{'publicado por: '+obj.publisher}</div>
                <div>{obj.short_description}</div>
                site:<a href='https://www.freetogame.com/5street'>{' '+obj.freetogame_profile_url}</a>
                <div className='btn'>
                        <div className='btn_select btn_voltar' onClick={voltar}>voltar pra home</div>
                        <div className='btn_select btn_jogar'>
                           <a href={obj.game_url}>jogar</a>
                        </div>
                  
                </div>
                </div>
        </div>
    </>
}

export default Select;