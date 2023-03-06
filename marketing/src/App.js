import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import styled from 'styled-components';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const StyledWrapper = styled.div`
  background: blue;
`;

export default ({ history }) => {
  return (
    <StyledWrapper>
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </StyledWrapper>
  );
};
