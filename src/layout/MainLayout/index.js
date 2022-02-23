import React from 'react'
import { Link } from 'react-router-dom'

export default function Component({ children }) {
  return (
    <div className="global">
      <div className='main-menu'>
        <ul>
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>
          |
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  )
}
