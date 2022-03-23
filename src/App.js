import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route exact path="/" element={<Home />} />            
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
