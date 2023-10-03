
import "../components/Styles/Home.css";
import image from "../image/image.jpg";
import { Cart } from '../components/Cart'
import navbar from "../components/Navbar"


// import footer from "../components/"
// import footer from "./components/Styles/footer.css"



const Home = () => {
  return (
    
    <section className="homepage" style={{backgroundImage:` url(${image})`}}
    >         <div className = "content">
            <h1>  Nomadic.Co </h1>

            <p>  Embrace the Wanderlust, One Brew at a Time.</p>

            <a href ="Menu"> Order </a>
        </div>
    </section>
  );
};

export default Home;


