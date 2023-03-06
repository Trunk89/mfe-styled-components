import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn({ onSignIn }) {
  return (
    <div>
      <Link to="/auth/signup">{"Don't have an account? Sign Up"}</Link>
    </div>
  );
}
