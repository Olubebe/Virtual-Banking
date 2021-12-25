import React from "react";
import {
  Container,
  FormWrap,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormContent,
  Text,
  Icon,
} from "./SigninElements";

const Signin = () => {
  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forget Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  );
};

export default Signin;
