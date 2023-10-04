// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import  Home  from "./pages/Home";
// import { Coffee } from "./pages/Coffee";
// import { Navbar } from "./components/Navbar";
// import { ShoppingCartProvider } from "./context/ShoppingCartContext";
// import { Profile } from "./pages/Profile";
// import SignIn from "./components/auth/SignIn";
// import SignUp from "./components/auth/SignUp";

// function App() {
//   const [showSignIn, setShowSignIn] = useState(true);

//   const toggleForm = () => {
//     setShowSignIn((prev) => !prev);
//   };

//   return (
//     <ShoppingCartProvider>
//       <Navbar />
//       <Container className="mb-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Menu" element={<Coffee />} />
//           <Route
//             path="/SignIn"
//             element={
//               showSignIn ? (
//                 <SignIn toggleForm={toggleForm} />
//               ) : (
//                 <SignUp toggleForm={toggleForm} />
//               )
//             }
//           />
//           <Route path="/Profile" element={<Profile />} />
//         </Routes>
//       </Container>
//     </ShoppingCartProvider>
//   );
// }

// export default App;


import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import { Coffee } from "./pages/Coffee";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/auth/SignUp";
import footer from "./styles/Footer.css"



function App() {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleForm = () => {
    setShowSignIn((prev) => !prev);
  };

  return (

    

    <ShoppingCartProvider>
      <Navbar />
      {/* <Container className="mb-4"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Coffee />} />
          <Route
            path="/SignIn"
            element={
              showSignIn ? (
                <SignIn toggleForm={toggleForm} />
              ) : (
                <SignUp toggleForm={toggleForm} />
              )
            }
          />
        </Routes>
      {/* </Container> */}
    </ShoppingCartProvider>
   
   
  );
}

export default App;