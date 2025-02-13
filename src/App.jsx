import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './pages/about/About.jsx';
import Menu from './pages/menu/Menu.jsx';
import PrivateEvents from './components/PrivateEvents';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Menu />
            <PrivateEvents />
            <Footer />
        </div>
    );
}

export default App;
