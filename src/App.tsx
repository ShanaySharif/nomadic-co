import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import {Home} from "./pages/Home"
import {Coffee} from "./pages/Coffee"
// import {SignIn} from "./pages/SignIn"
import {Navbar} from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import {Profile} from "./pages/Profile"
import SignIn from "./components/Auth/SignIn"





function App () {
  return (
    <ShoppingCartProvider>
    <Navbar />
   <Container className="mb-4"> 
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Menu" element={<Coffee />} />
    <Route path="/SignIn" element={<SignIn />} />
    <Route path="/Profile" element={<Profile />} />
  </Routes>
  </Container>
  </ShoppingCartProvider>
  )
}
export default App

