
import "../Home.css";
import image from "../image/image.jpg";
import navbar from "../components/Navbar"



const Home = () => {
  return (
    
    <section className="homepage" style={{backgroundImage:` url(${image})`}}
    >         <div className = "content">
            <h1>  Nomadic.Co </h1>

            <p>  Your Home for Endless Aromas and Global Flavors. Embrace the Wanderlust, One Brew at a Time.</p>

            <a href ="Menu"> Order </a>


            {/* <a href ="SignIn"> Log In </a> */}


        </div>
    </section>
  );
};

export default Home;