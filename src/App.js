 import React from 'react'

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
 import { showData,deletedata } from './action/index';

const App = () => {
  const data = useSelector((state)=> state.handledata);
  console.log(data);

  const dispatch = useDispatch();
  return (

    <div>
    <h1>Data here </h1>
    <button onClick={()=>dispatch(showData())}>showData</button>
    <button onClick={()=>dispatch(deletedata(data))}>Delete</button>
    <div className='showData'>
      {data.map((item)=><div key={item.id} className='product-item'>
        <button onClick={()=>dispatch(deletedata(item.id))}>Delete</button>
        <div>{item.title}</div>
        <div>{item.id}</div>
        <img src={item.image} alt=''/>

      </div>)}

    </div>
    </div>
  )
}

export default App


