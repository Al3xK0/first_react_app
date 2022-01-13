import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Nav from './Components/nav/Nav';
import Home from './Components/home/Home';
import Contact from './Components/contact/Contact';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;