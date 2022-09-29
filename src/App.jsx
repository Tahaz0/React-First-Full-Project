import React from 'react';
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import About from './Components/about/About';
import Experience from './Components/experience/Experience';
import Service from './Components/service/Service';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonial from './Components/testimonial/Testimonial';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Service />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
        </>
    );
}

export default App;