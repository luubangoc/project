
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';



function App() {
  return (
    <Router>
    <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} /> */}
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;
