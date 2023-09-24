import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import {Home} from "./pages/Home"
import {Coffee} from "./pages/Coffee"
import {SignIn} from "./pages/SignIn"
import {Navbar} from "./components/Navbar"


function App () {
  return (
    <> 
    <Navbar />
   <Container className="mb-4"> 
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Coffee" element={<Coffee />} />
    <Route path="/SignIn" element={<SignIn />} />
  </Routes>
  </Container>
  </>
  )
}
export default App