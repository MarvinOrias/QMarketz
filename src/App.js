import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AppNav from './components/AppNav';
import HomeForm from './components/HomeForm';
import UsersPage from './pages/UsersPage';
import CreateUsersPage from './pages/CreateUsersPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNav />
        <Container>
          <Routes>
            <Route path="/" element={<HomeForm />} />
            <Route path="/users" element={<UsersPage/>} />
            <Route path="/create" element={<CreateUsersPage/>} />
          </Routes>
        </Container>
      </BrowserRouter>    
    </>
  );
}

export default App;
