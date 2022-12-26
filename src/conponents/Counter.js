import React, { useState } from 'react';
import Count from './Count';
import TotalCount from './TotalCount';
const arr = [{
    id :1,
    value : 1,
    count:0
},]

const Counter = () => {
    const [ arrr, setArrr] = useState(arr)

    const increment = (id)=>{
        const updatedCounter = arrr.map((c)=>{
            if(c.id === id){
                return {...c, count : c.count+ c.value}
            }
            return {...c}
        })
        setArrr(updatedCounter)
    
    }
    const decrement = (id)=>{
        const updatedCounter = arrr.map((c)=>{
            if(c.id === id){
                return {...c, count : c.count- c.value}
            }
            return {...c}
        })
        setArrr(updatedCounter)
    
    }
    const reset = (id)=>{
        const updatedCounter = arrr.map((c)=>{
            if(c.id === id){
                return {...c, count : 0}
            }
            return {...c}
        })
        setArrr(updatedCounter)
    
    }
    const addCounter =()=>{
        setArrr([...arrr, {id : new Date().getSeconds(), value : Math.round(Math.random()*10),count:0}])
    }

   

    return (
      <div>
            {arrr.map((itm) =>(
                <div key={itm.id} className='cart'>
                <Count increment={increment} decrement={decrement} reset={reset} arrr={itm}/>
        </div>
        ))}
        <div><button className='add-btn' onClick={addCounter}>Add Counter</button></div>
        <TotalCount arrr={arrr}/>
      </div>
    );
}

export default Counter;

