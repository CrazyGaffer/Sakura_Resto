import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import PrivateEvents from './components/PrivateEvents';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Menu />
            <PrivateEvents />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
