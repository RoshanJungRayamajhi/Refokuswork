import React from 'react'

function Stripe( {value}) {
  return (
    <div className=' w-[20%] px-5 py-5 border-t-[1.2px] border-b-[1.2px] border-r-2 border-zinc-700 flex items-center justify-between'>
     <img src={value.img} alt="" />  
     <span className=' font-semibold '>{value.number}</span>
      
    </div>
  )
}

export default Stripe
