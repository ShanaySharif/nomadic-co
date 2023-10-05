
import "../components/Styles/Home.css";
import image from "../image/image.jpg";
// import { navbar } from "../components/Navbar"



const Home = () => {
  return (

    <div className="bod"> 
    <section className="homepage" style={{backgroundImage:` url(${image})`}}
    

    >         <div className = "content">
            <h1>  Welcome to Nomadic.Co </h1>

            <p>  Embrace the Wanderlust, One Brew at a Time.</p>

            <a href ="Menu"> Order </a>
        </div>
        
    </section>
    </div>

    
  );
};



export default Home;


