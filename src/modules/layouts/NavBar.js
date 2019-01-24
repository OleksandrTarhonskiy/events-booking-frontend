import React, { Component } from 'react';
import styled               from 'styled-components';
import { Link }             from 'react-router-dom';

class LoginPage extends Component {
  render() {
    return (
      <Wrapper>
        <NavBarLink to="/login">
          Login
        </NavBarLink>
        <span style={{color : '#ffff'}}>
          |
        </span>
        <NavBarLink to="/">
          Sign Up
        </NavBarLink>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background : #222534;
  padding    : 1% 5%;
`;

const NavBarLink = styled(Link)`
  color           : #ffff;
  padding         : 0 5px;
  text-decoration : none;
`;

export default LoginPage;