import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import Desenvolvedor from './pages/Desenvolvedor';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/dev" element={<Desenvolvedor />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;