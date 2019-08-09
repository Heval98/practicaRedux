import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => (
        <nav id={props.menu}>
            <Link to='/'>
                Usuarios
            </Link>
            <Link to='/tareas'>
                Tareas
            </Link>
        </nav>
)

export default Menu;
