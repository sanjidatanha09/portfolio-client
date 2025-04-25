
import Contact from "../Pages/Contact/Contact";
import Experience from "../Pages/Experience/Experience";
import Skills from "../Pages/Skills/Skills";
import Education from "../Pages/education/Education";
import Project from "../Pages/project/Project";
import Banner from "./Banner";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Project></Project>
            <Education></Education>
            <Experience></Experience>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};
export default Home;