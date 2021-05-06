import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../../contexts/auth";
import {
  ContainerPaginaLogin,
  ContainerConteudoLogin,
  ImagemLogin,
  FormLogin,
} from "./styles";

const Login: React.FC = () => {
  const { signIn } = useAuth();
  return (
    <ContainerPaginaLogin>
      <ContainerConteudoLogin>
        <ImagemLogin />
        <FormLogin>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>CPF:</Form.Label>
            <Form.Control type="email" placeholder="Informe seu CPF" />
            <Form.Text className="text-muted">Login </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </FormLogin>
      </ContainerConteudoLogin>
    </ContainerPaginaLogin>
  );
};

export default Login;
