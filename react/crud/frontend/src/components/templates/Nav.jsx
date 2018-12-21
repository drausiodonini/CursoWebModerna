import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <NavItem link='' icon='home' item='Início'/>
        <NavItem link='users' icon='users' item='Usuários'/>
    </aside>