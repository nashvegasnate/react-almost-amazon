import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { getAuthors } from '../helpers/data/AuthorData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <NavBar />
      <Routes
       authors={authors}
       setAuthors={setAuthors}
       />
    </>
  );
}

export default App;
