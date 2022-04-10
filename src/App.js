import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';
import Nav from './Components/nav/Nav';
import Consultation from './Components/consultation/Consultation'
import About from './Components/about/About';
import News from './Components/news/News';
import Button from './Components/button/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function App() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Nav />

                <Routes>

                    <Route path='/' element={<Home />} />

                    <Route path='/about' element={<About />} />

                    <Route path='/consultation' element={<Consultation />} />
                    
                    <Route path='/news' element={<News />} />

                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
}
