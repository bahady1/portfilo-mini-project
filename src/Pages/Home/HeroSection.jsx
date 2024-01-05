import {Link} from "react-scroll";


export default function HeroSection (){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Abdelhadi</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Fill Stack</span>{" "}
                        <br />
                        Devloper
                    </h1>
                    <p className="hero--section-description">
                        Hello my name is abdelhadi lakaf from Algeria.
                        <br />I am web and mobile application devloper 
                    </p>
                </div>
                <Link  
                    spy= {true}
                    smooth= {true}
                    offset={-70}
                    duration={500}
                    to="Contact"
                    className="btn btn-primary ">Get In Touche</Link>
            </div>
            <div className="Hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />


            </div>


        </section>
        )

}