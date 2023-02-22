import React, { useState } from 'react'

function counter() {
    const[count,setCount]=useState(0)
  return (
    <>
    <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Add</button>
    </>
  )
}

export default counter