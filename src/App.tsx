import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from '@mui/material';
import Accueil from './components/accueil/Accueil';
import Diplome from './components/diplomes/Diplome';
import MyToolbar from './components/toolbar/MyToolbar';
import Experiences from './components/experiences/Experience';
import Competences from './components/competences/Competences';
import { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop - 180 && scrollPosition < sectionTop + sectionHeight - 180) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleUrlAnchorChange = () => {
      const sectionFromUrl = window.location.hash.substr(1);
      setActiveSection(sectionFromUrl);
    };

    window.addEventListener('hashchange', handleUrlAnchorChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlAnchorChange);
    };
  }, []);

  useEffect(() => {
    window.location.hash = activeSection;
  }, [activeSection]);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <MyToolbar activeSection={activeSection}></MyToolbar>

        <div
          id="app"
          style={{
            width: "100%",
            margin: "auto",
            marginTop: "64px",
            backgroundColor: "#212121"
          }}
        >
          <Accueil />
          <Diplome />
          <Competences />
          <Experiences />
        </div>

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
