import React from 'react';
import Footer from '../../components/footer/index';
import Head from '../../components/header/index';


function About(){
    return(
        <div>
            <Head/>
            <div class="embed-responsive embed-responsive-16by9">
            <iframe title="googlemap" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3325436.279313536!2d75.80351671715844!3d8.174468530416405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1596422341903!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <Footer/>
        </div>
        
    );
}
export default About;