import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleAuthorCard from '../components/SingleAuthorCard';
import { getSingleAuthor } from '../helpers/data/AuthorData';

export default function SingleAuthor() {
  const [author, setAuthor] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleAuthor(firebaseKey)
      .then(setAuthor);
    // or .then((response) => setAuthor(response)); SAME THING AS ABOVE -SHORTHAND VERSION
  }, []);

  return (
    <div>
      <SingleAuthorCard author={author}>
        <h2>Name: {author.first_name} {author.last_name}</h2>
        <h3>Email: {author.email}</h3>
      </SingleAuthorCard>
    </div>
  );
}
