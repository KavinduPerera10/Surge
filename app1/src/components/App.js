import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import NotFound from './NotFound';

const App = () =>
  <BrowserRouter>
    <Header />
      <main>
        <Routes>
          <Route exact path = '/home' element={<Home/>} />
          <Route exact path = '/signup' element={<SignUp/>} />
          <Route exact path = '/signin' element={<SignIn/>} />
          <Route celement={<NotFound/>} />
        </Routes>
      </main>
  </BrowserRouter>

export default App;
