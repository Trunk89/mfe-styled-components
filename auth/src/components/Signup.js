import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp({ onSignIn }) {
  return (
    <div>
      <Link to="/auth/signin">Already have an account? Sign in</Link>
    </div>
  );
}
