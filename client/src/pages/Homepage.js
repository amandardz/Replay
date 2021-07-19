import React from 'react';
import Container from '../components/Container'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomepageCards from '../components/HomepageCards';

function Homepage() {
    return(
        <Container className="d-flex flex-column">
            <Hero />
            <HomepageCards />
            <Footer />
        </Container>
    )
}

export default Homepage;