import AboutMe from "../Aboutme";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfilio from "../MyPortfilio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home () {

    return(
        <dev>
            <HeroSection />
            <MySkills />
            <AboutMe/>
            <MyPortfilio/>
            <Testimonial/>
            <ContactMe/>
            <Footer/>
            
        </dev>

    )
}