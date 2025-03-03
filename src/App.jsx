import Header from './components/Header.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Menu from './pages/menu/Menu.jsx';
import PrivateEvents from './components/PrivateEvents';
import Footer from './components/Footer';
import LanguageSelector from "./components/LanguageSelector.jsx";
import './i18next.config.jsx';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Menu />
            <PrivateEvents />
            <Footer />
            <LanguageSelector />
        </div>
    );
}

export default App;