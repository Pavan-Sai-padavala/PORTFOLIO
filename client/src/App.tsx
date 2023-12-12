import React from 'react';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Contact from './pages/Contacts'
import {About} from './components/About';
import { Projects } from './pages/Projects';
import { Education } from './pages/Education';
import { Skills } from './pages/Skills';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Updates from './pages/Updates';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
    return(<ThemeProvider theme={darkTheme}><BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />}/>
       <Route path='Home' element={<Home />}>
          <Route index element={<About />}/>
          <Route path='About' element={<About />}/>
          <Route path='Projects' element={<Projects />}/>
          <Route path='Education' element={<Education />}/>
          <Route path='Skills' element={<Skills />}/>
        </Route>
        <Route path='Contact' element={<Contact />}/>
        <Route path='Updates' element={<Updates />} />
      </Routes>
  </BrowserRouter> 
  </ThemeProvider>
  );
}

export default App;
