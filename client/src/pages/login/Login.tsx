import React from "react";
import Form from "../components/Form";
import styled from "styled-components";
import background from "../../images/background.jpg";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-size: 100% 100%;
`;

function Login() {
  return (
    <Wrapper>
      <Form heading='Login' email='email' password='password' label='logins' />
    </Wrapper>
  );
}

export default Login;
