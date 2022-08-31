import React, { useEffect, useState } from 'react'

function Todos({ data, updatecomp, test,dele }) {

  const [read, setread] = useState(data.complet)

  return (
    <div className="box">
      <input type="checkbox" name="" id="" className='ch' checked={data.complet ? "checked" : ""} onChange={()=>test(data)} />
      <p onClick={()=>test(data)} style={data.complet ? { textDecoration: "line-through" } : {}} >{data.text}</p>
      <button className='x' onClick={()=>dele(data)} >x</button>
    </div>
  )
}

export default Todos