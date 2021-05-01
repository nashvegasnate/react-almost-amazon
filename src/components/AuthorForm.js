import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addAuthor, updateAuthor } from '../helpers/data/AuthorData';

const AuthorForm = ({
  setAuthors,
  firebaseKey,
  firstName,
  lastName,
  email
}) => {
  const [author, setAuthor] = useState({
    first_name: firstName || '',
    last_name: lastName || '',
    email: email || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add author to firebase
    if (author.firebaseKey) {
      updateAuthor(author).then((authorsArray) => setAuthors(authorsArray));
    } else {
      addAuthor(author).then((authorArray) => setAuthors(authorArray));
    }
  };

  return (
    <div className='author-form'>
    <Form
      id='addAuthorForm'
      autoComplete='off'
      onSubmit={handleSubmit}
    ><h2>New Author</h2>

    <FormGroup>
      <Label for='firstName'>First Name: </Label>
      <Input
        name='first_name'
        type='text'
        placeholder='First Name'
        value={author.first_name}
        onChange={handleInputChange}
      />
      </FormGroup>

      <FormGroup>
      <Label for='lastName'>Last Name: </Label>
      <Input
        name='last_name'
        type='text'
        placeholder='Last Name'
        value={author.last_name}
        onChange={handleInputChange}
      />
      </FormGroup>

      <FormGroup>
      <Label for='email'>Email: </Label>
      <Input
        name='email'
        type='text'
        placeholder='Email'
        value={author.email}
        onChange={handleInputChange}
        />
      </FormGroup>

      <Button type='submit' color="info">Submit</Button>
      </Form>
    </div>
  );
};

AuthorForm.propTypes = {
  setAuthors: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default AuthorForm;
