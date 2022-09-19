import React from 'react'
import {NavLink} from 'react-router-dom'
import "./navl.css"

const Rdir = () => {

    const links = [
        {url: '/search', text:'all'},
        {url: '/news', text:'news'},
        {url: '/image', text:'images'},
        {url: '/video', text:'videos'},

    ]

  return (
    <div className='nlc'>
        {links.map(({url , text},inx) => (
            <NavLink className='navl' key={inx} to={url}>
                {text}
            </NavLink>
        ))}
    </div>
  )
}

export default Rdir