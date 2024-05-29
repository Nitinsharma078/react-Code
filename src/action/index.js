import {SHOW,DELETE} from "./constant"
 export const showData =()=>{
     return{
       type :SHOW
     }
}
export const deletedata =(data)=>{
     return{
          type:DELETE,
          payload : data
     }
}

