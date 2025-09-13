import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export const Menu = () => {
  return (
    <div className='col-md-4 menuBx'>
        <ul>
            <li>
                <Link>Home</Link>
            </li>
             <li>
                <Link>Services</Link>
            </li>
             <li>
                <Link>About</Link>
            </li>
             <li>
                <Link>Contact</Link>
            </li>
        </ul>
    </div>
  )
}
