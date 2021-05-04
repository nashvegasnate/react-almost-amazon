import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
    <NavItem>
      <Link className="nav-link" to="/add-author">Add An Author</Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="/authors">Author Card</Link>
    </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">Home</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          { user && authenticated()}
            <div>
              {
                user !== null
                && <div>
                  {
                    user
                      ? <Button color='danger' onClick={signOutUser}>Sign Out</Button>
                      : <Button color='light' onClick={signInUser}>Sign In</Button>
                  }
                </div>
              }
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
