import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import Desenvolvedor from './pages/Desenvolvedor';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter basename="/importador-sig-page">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/dev" element={<Desenvolvedor />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;