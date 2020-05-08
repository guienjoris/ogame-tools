import {Link} from 'react-router-dom';
import React from 'react'

const Header = ()=>{
    return(
        <ul style={{display:'flex'}}>
            <Link to='/'>
            <li style={{marginLeft:10, listStyle:'none'}}>Accueil</li>
            </Link>
            <Link to='/trade'>
            <li style={{marginLeft:10, listStyle:'none'}}>Trade</li>
            </Link>
            
        </ul>
    )
} 

export default Header;