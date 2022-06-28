import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav >
        <ul className='flex gap-[83px]
                      bg-[aqua] justify-center
                      h-[58px] items-center'>
          <li>
            <Link to='/login' className='text-[28px] hover:border-b-2 border-black'>Login</Link>
          </li>
          <li>
            <Link to='/singup' className='text-[28px] hover:border-b-2 border-black'>Sing-Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header