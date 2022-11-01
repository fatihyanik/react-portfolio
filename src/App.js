import React from 'react'
import About from './components/About/About'
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import GlobalStyles from './components/styles/Global';
import { BrowserRouter as Router } from "react-router-dom";
import ParallaxComponent from "./components/Parallax/Parallax";
import Technologies from "./components/Technologies/Technologies";
import Playground from "./components/Playground/Playground";

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <Navbar />
                    <Home />
                    <Projects />
                    <About />
                    <ParallaxComponent />
                    <Technologies />
                    <Playground />
                    <Footer />
                </>
            </ThemeProvider>
        </Router>
    )
}

export default App
