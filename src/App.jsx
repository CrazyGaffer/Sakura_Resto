import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './pages/about/About.jsx';
import Menu from './pages/menu/Menu.jsx';
import Gallery from './pages/gallery/Gallery.jsx';
import PrivateEvents from './components/PrivateEvents';
import Footer from './components/Footer';
import LanguageSelector from "./components/LanguageSelector.jsx";
import './i18next.config.jsx'; // Import the i18n configuration

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Menu />
            <Gallery />
            <PrivateEvents />
            <Footer />
            <LanguageSelector />
        </div>
    );
}

export default App;