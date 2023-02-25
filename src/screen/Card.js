import React from 'react';
function Card({data}){
    console.log(data);
    return (
    <div className='cardstart' >
        <div className='cardimg'>
        <img src={data.image} width="200px" height={"250px"} />
        </div>
        <p>{data.id}</p>
        <p>{data.title}</p>
        <p>PRICE: {data.price}</p>
        <p>{data.category}</p>
        <span>Rating: {data.rating.rate}</span>
        &nbsp;
        <span>({data.rating.count})</span>
    </div>
    
   );
}

export default Card; 
