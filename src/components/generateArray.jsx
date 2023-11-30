import React from 'react'

const generateArray=(totalResult)=>{
    const limit = Math.ceil(totalResult / 10);
    const x = [];
  
    for (let i = 1; i <= limit; i++) {
      x.push(i);
    }
  
    return x;
  }
export default generateArray
