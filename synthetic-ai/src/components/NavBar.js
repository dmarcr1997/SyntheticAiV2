
import React from 'react';
import { Link } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { NavLink } from 'react-router-dom';


const NavBar = (props) =>{
    function capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }; 

    return(
        <div>
            {props.links.map(link => <Button><Link><NavLink key={Math.random()} to={`${link}`} exact>{capitalize(link)}</NavLink></Link></Button>)}
        </div>
    )
}
export default NavBar