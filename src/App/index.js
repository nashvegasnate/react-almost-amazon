import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';
import { getAuthors } from '../helpers/data/AuthorData';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  return (
    <>
    <Router>
      <NavBar />
      <Routes
       authors={authors}
       setAuthors={setAuthors}
       />
     </Router>
    </>
  );
}

export default App;
