import React from "react";
function Jogo({title,thumbnail }){
    return<>
       <div className='bloco_jogo'>
         <div className='titulo'>{title}</div>
         <img src={thumbnail} alt=''/>
       </div>
    </>
}

export default Jogo;