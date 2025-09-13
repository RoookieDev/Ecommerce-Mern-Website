import React from 'react'
import {Logo} from './Logo'
import { Menu } from './Menu'
import { ButtonBox } from './ButtonBox'

// CSS import

import '../../../assets/css/navbarStyle.css'
import { SearchBox } from './SearchBox'
export const Navbar = ({active_user}) => {
  return (
    <div className='navBar'>
     <div className="row">
       <Logo/>
      <Menu/>
      <SearchBox/>
      <ButtonBox active_user={active_user}/>
     </div>
    </div>
  )
}
