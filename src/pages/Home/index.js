import React from 'react';
import FadeIn from 'react-fade-in';

function Home() {
    return (
        <div>
            <section className="home-mission" id="intro" data-aos="fade-up">
            <FadeIn>
                <h2>I enjoy interactive <br></br>design and code.</h2>
                <h2>I bring them together. </h2>
                <h2>It’s like magic, but it’s real.</h2>
            </FadeIn>
            </section>
        </div>

    )
}

export default Home;
