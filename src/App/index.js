import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import AuthorCard from '../components/AuthorCard';
import { getAuthors } from '../helpers/data/AuthorData';
import AuthorForm from '../AuthorForm';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((resp) => setAuthors(resp));
  }, []);

  return (
    <>
     <AuthorForm
        formTitle="Add Author"
        setAuthors={setAuthors}
     />
     <div className="card-container">
       {authors.map((authorInfo) => (
         <AuthorCard
          key={authorInfo.firebaseKey}
          firebaseKey={authorInfo.firebaseKey}
          firstName={authorInfo.first_name}
          lastName={authorInfo.last_name}
          email={authorInfo.email}
          setAuthors={setAuthors}
        />
       ))}
     </div>
    </>
  );
}

export default App;
