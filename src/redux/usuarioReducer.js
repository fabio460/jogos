

const init = {
    lista:[]
}
const usuarioReducer = (state=init,action)=>{
   switch (action.type) {
       case 'yes':
           return {...state,lista:action.payload.lista}
   
       default:
           break;
   }
   return state;
}
export default usuarioReducer;