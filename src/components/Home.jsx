import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <header className="hero">
                <h1>Добро пожаловать в Sakura Resto</h1>
                <p>Насладитесь изысканной кухней и уютной атмосферой.</p>
            </header>
        </motion.div>
    );
};

export default Home;
