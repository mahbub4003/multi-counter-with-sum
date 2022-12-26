import React from 'react';
const Count = ({arrr, increment,decrement, reset }) => {
    
    return (
        <div>
             <span className='value'>{arrr.count}</span>
                <div>
                <button onClick={()=>increment(arrr.id)} className='btn'>Increment</button>
                <button onClick={()=>decrement(arrr.id)} className='btn'>Decrement</button>
                <button onClick={()=>reset(arrr.id)} className='btn'>Reset</button>
            </div>
        </div>
    );
}

export default Count;
