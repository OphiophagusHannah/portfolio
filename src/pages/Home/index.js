import React, {useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div>
      <section className="home-mission" id="intro" data-aos={"fade-up"}>
        <h2 data-aos={"fade-up"} data-aos-delay={200}>
          I enjoy interactive <br></br>design and code.
        </h2>
        <h2 data-aos={"fade-up"} data-aos-delay={100}>I bring them together. </h2>
        <h2 >It’s like magic, but it’s real.</h2>
      </section>
    </div>
  );
}

export default Home;
