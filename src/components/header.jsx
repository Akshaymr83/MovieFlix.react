import React  from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

function Header() {
  return (
    <div className="header">
        <div className="headerLeft">
        <Link to ="/" className='logo'>MOVIEFLIX</Link>
        <Link to ="/movies/popular" style={{textDecoration:'none'}}><span>Popular</span></Link>
        <Link to ="/movies/top_rated" style={{textDecoration:'none'}}><span>Top Rated</span></Link>
        <Link to ="/movies/upcoming" style={{textDecoration:'none'}}> <span>Upcoming</span></Link>

        </div>
        <div>
          <input type="text" name="" className='search' placeholder='Search' />
        </div>
    </div>
  )
}

export default Header