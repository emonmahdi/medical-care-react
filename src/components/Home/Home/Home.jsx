import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Doctors from '../../Doctors/Doctors';
import Faqs from '../../Faqs/Faqs';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <div className="bannerAndNav"> 
                <Navigation />
                <Banner />
            </div>
            <main>
                <About />
                <Services />
                <Faqs />
                {/* <Doctors />
                <Blogs /> */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;