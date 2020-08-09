
import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = (props) =>{
    function capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }; 
    const linkStyle = {
        width: '50px',
        padding: '6px',
        margin: '0 6px 6px',
        background: 'darkgreen',
        textDecoration: 'none',
        color: 'white',
        border: 'solid darkgreen',
        borderRadius: '12px'
    };

    return(
        <div>
            {props.links.map(link => <NavLink key={Math.random()} to={`${link}`} exact style={linkStyle}>{capitalize(link)}</NavLink>)}
        </div>
    )
}
export default NavBar