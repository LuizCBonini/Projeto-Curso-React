import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Company from './Components/Pages/Company';
import Contact from './Components/Pages/Contact';
import NewProject from './Components/Pages/NewProject';
import Projects from './Components/Pages/Projects';

import Container from './Components/Layout/Container';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/newproject" element={<NewProject />}></Route>
        </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
