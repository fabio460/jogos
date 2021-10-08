import React from "react";
function Jogo({title,thumbnail,genre }){
    return<>
       <div className='bloco_jogo'>
         <div className='titulo'>{title}</div>
         <img src={thumbnail} alt=''/>
         <div>{genre}</div>
       </div>
    </>
}

export default Jogo;