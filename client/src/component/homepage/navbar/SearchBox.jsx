import React from 'react'

export const SearchBox = () => {
  return (
    <div className='col-md-2 searchBox'>
        <form action="">
            <input type="text" placeholder='Search'/>
            <button><i className='fa-solid fa-search'></i></button>
        </form>
    </div>
  )
}
