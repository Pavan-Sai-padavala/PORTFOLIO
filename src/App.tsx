import React from 'react';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Contact from './components/Contacts'
import {About} from './components/About';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
      </Routes>
  </BrowserRouter> 
  </ThemeProvider>
  );
}

export default App;
