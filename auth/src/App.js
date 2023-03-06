import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import styled from 'styled-components';

import Signin from './components/Signin';
import Signup from './components/Signup';

const StyledWrapper = styled.div`
  background: green;
`;

export default ({ history, onSignIn }) => {
  return (
    <StyledWrapper>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StyledWrapper>
  );
};
