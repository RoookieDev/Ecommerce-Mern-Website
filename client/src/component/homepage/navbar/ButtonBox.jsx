import React from 'react'

export const ButtonBox = ({active_user}) => {
  return (
    <div className='buttonBox col-md-3'>
        <button><i className='fa-solid fa-bell'></i></button>
        <button><i className='fa-solid fa-sign-out'></i></button>
        <button><i className='fa-solid fa-user'></i> {active_user}</button>
    </div>
  )
}
