import { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";

export default function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <Title>Dashboard</Title>
      {!isLogin ? <Login /> : <Register />}
      <Button onClick={() => setIsLogin(!isLogin)}>
        I want to {isLogin ? "login" : "register"}
      </Button>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h2`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const Button = styled.button`
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: #141414;
  font-weight: 900;
  color: white;
  font-family: Inconsolata;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
`;
