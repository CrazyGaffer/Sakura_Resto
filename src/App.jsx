import Header from './components/Header.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Menu from './pages/menu/Menu.jsx';
import Events from './pages/events/Events.jsx';
import Footer from './components/Footer';
import LanguageSelector from "./components/LanguageSelector.jsx";
import './i18next.config.jsx';
import Testimonials from "./pages/testimonials/Testimonials.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Menu />
            <Events />
            <Testimonials/>
            <Footer />
            <LanguageSelector />
        </div>
    );
}

export default App;