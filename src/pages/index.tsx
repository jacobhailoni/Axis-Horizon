import React from "react";
import Layout from "../layouts/MainLayout";
import Banner from "../components/sections/Home3/Banner";
import Marquee from "../components/sections/Home3/Marquee";
import About from "../components/sections/Home3/About";
import Video from "../components/sections/Home3/Video";
import Service from "../components/sections/Home3/Service";
import Service2 from "../components/sections/Home3/Service2";
import Testimonials from "../components/sections/Home3/Testimonials";
import Contact from "../components/sections/Home3/Contact";

function Home3() {

    return (
        <>
            <Layout HeaderStyle="three" FooterStyle="three">
                <Banner />
                <Marquee />
                <About />
                <Video />
                <Service />
                <Service2 />
                <Testimonials />
                <Contact />
            </Layout>
        </>
    );
}
export default Home3
