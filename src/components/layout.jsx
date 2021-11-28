import React from 'react'
import Header from './header'
import Footer from './footer'

const mainContentStyle = {
    background: 'black',
    height: '100vh'
}

const Layout = ({ children }) => {


    return (
    <main style={mainContentStyle}>
        <Header />
        {children}
        <Footer />
    </main>)
}

export default Layout;