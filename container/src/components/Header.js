import React from 'react';
import { Link } from 'react-router-dom';
import { TestComponent } from 'trunk-styled-components-library';

export default function Header({ isSignedIn, onSignOut }) {
  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <TestComponent heading="Heading" content="Text"></TestComponent>
      <Link to={isSignedIn ? '/' : '/auth/signin'} onClick={onClick}>
        {isSignedIn ? 'Logout' : 'Login'}
      </Link>
    </React.Fragment>
  );
}
