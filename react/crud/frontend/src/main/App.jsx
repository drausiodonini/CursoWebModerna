import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
// import {HashRouter} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Routes from './Routers'
import Footer from '../components/templates/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>