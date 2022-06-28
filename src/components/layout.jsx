import React from 'react';
import Header from './header';
import Footer from './footer';
import { useLocation } from '@reach/router';
import { Helmet } from "react-helmet";
import CookieConsent from 'react-cookie-consent';

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

const cookieConstentStyle = {
    bottom: '40px',
    alignItems: 'baseline',
    background: 'rgb(53, 53, 53)',
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    left: '0px',
    position: 'fixed',
    width: '100%',
    zIndex: 10000,
    padding: '0.5rem'
}

const cookieConstentButtonStyle = {
    background: 'rgb(255, 212, 45)',
    border: '0px',
    borderRadius: '0px',
    color: 'black',
    cursor: 'pointer',
    flex: '0 0 auto',
    padding: '5px 10px'
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
                <link rel="canonical" href="https://www.oanabologbleich.com/"/>
            </Helmet>
            <Header />
            {children}
            <CookieConsent
                location=""
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="gatsby-gdpr-google-analytics"
                disableStyles={false}
                style={cookieConstentStyle}
                buttonStyle={cookieConstentButtonStyle}>
                This website uses cookies to enhance the user experience.{" "}
            </CookieConsent>
            <Footer />
        </main>)
}

export default Layout;