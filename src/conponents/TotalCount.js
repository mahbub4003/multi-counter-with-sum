import React from 'react';

const TotalCount = ({arrr}) => {
    const totalCount = arrr.reduce((total, current)=>total+current.count,0)
    return (
        <div>
            <h3>Total : {totalCount} </h3>
        </div>
    );
}

export default TotalCount;
