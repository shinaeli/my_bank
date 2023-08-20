import React from 'react'
import { stats } from '../constants'
const Stats = () => {
  return (
    <div className='xs:mt-[100px] flex items-center justify-between xs:flex-col xs:items-start sm:flex-col sm:items-start md:justify-center'>
      {stats.map(stat => {
        return (<div key={stat.id} className="flex items-center justify-between md:mr-[10px]">
          <h1 className='font-[600] text-[41px]'>{stat.value}</h1>
          <h3 className="text-gradient font-[400] text-[20px] ml-[10px] mt-[5px] uppercase">{stat.title}</h3>
        </div>)
      })}
    </div>
  )
}

export default Stats