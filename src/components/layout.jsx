import React from 'react'
import Header from './header'
import Footer from './footer'
import { useLocation } from '@reach/router'

const mainContentStyle = {
    background: 'black',
    height: '100vh',
}

const mainStyleHome = {
    backgroundImage: `url('img/home.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
}

const Layout = ({ children }) => {
    const location = useLocation();
    console.log(location)
    return (
    <main style={location.pathname === '/' ? {...mainContentStyle, ...mainStyleHome} : mainContentStyle}>
        <Header />
        {children}
        <Footer />
    </main>)
}

export default Layout;