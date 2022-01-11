import React from 'react';
import Header from './header';
import Footer from './footer';
import { useLocation } from '@reach/router';
import { Helmet } from "react-helmet";

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
    return (
        <main style={location.pathname === '/' ? { ...mainContentStyle, ...mainStyleHome } : mainContentStyle}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="This is personal webpage of PhD artist Oana Bolog-Bleich,
                    where you can see the amazing oil on canvas paintings and other drawings created by the artist using mixed media." />
                <title>Oana Bolog-Bleich</title>
                <link rel="canonical" href="https://oanabologbleich.com" />
            </Helmet>
            <Header />
            {children}
            <Footer />
        </main>)
}

export default Layout;