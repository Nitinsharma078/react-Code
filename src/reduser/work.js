import { DELETE,SHOW, VAL } from "../action/constant";
 const initalstate = [];

const handledata = (state = initalstate , action)=>{

     switch(action.type){
          case SHOW:
          return state;
          case VAL:
               return action.data;
               
          case DELETE :
               console.log(state);
               console.log(state.filter((item)=>item.id !==action.payload));
          return state.filter((item)=>item.id !==action.payload);

          default:
               return state;
     }


}
export default handledata;