import React from 'react'
import { clients } from '../constants'

const Clients = () => {
  return (
    <div id='clients' className='flex items-center justify-between w-[90%] mb-[60px] mx-auto'>
      {clients.map(client => {
        return (
        <div key={client.id} className='w-[20%]'>
          <img src={client.logo} alt={`${client.logo}`} className='block' />
        </div>
        )
      })}
    </div>
  )
}

export default Clients