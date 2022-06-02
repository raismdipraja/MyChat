import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #fbfbfb;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  height: 410px;
  margin: 6rem auto 8.1rem auto;
  width: 329px;
`;

const Body = styled.div`
  background: -webkit-linear-gradient(bottom, #2dbd6e, #a6f77b);
  background-repeat: no-repeat;
`;

const CardContent = styled.div`
  padding: 12px 44px;
`;

const CardTitle = styled.div`
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 4px;
  padding-bottom: 23px;
  padding-top: 13px;
  text-align: center;
`;

const UnderlineTitle = styled.div`
  background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
  height: 2px;
  margin: -1.1rem auto 0 auto;
  width: 89px;
`;

const A = styled.a`
  text-decoration: none;
`;

const Label = styled.label`
  font-family: "Raleway", sans-serif;
  font-size: 11pt;
`;

const ForgotPassword = styled.legend`
  color: #2dbd6e;
  font-family: "Raleway", sans-serif;
  font-size: 10pt;
  margin-top: 3px;
  text-align: right;
`;

const Form = styled.form`
  align-items: left;
  display: flex;
  flex-direction: column;
`;

const FormBorder = styled.div`
  background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
  height: 1px;
  width: 100%;
`;

const FormContent = styled.input`
  background: #fbfbfb;
  border: none;
  outline: none;
  padding-top: 14px;
`;

const SubmitButton = styled.input`
  background: -webkit-linear-gradient(right, #a6f77b, #2dbd6e);
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px #24c64f;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;

  &:hover {
    box-shadow: 0px 1px 18px #24c64f;
  }
`;

const SignUp = styled.a`
  color: #2dbd6e;
  font-family: "Raleway", sans-serif;
  font-size: 10pt;
  margin-top: 16px;
  text-align: center;
`;

function LoginComponents() {
  return (
    <div>
      <Body>
        <Card>
          <CardContent>
            <CardTitle>
              <h2>LOGIN</h2>
              <UnderlineTitle />
            </CardTitle>
            <Form>
              <Label style={{ paddingTop: "13px" }}>Email</Label>
              <FormContent
                id="user-email"
                class="form-content"
                type="email"
                name="email"
                autocomplete="on"
                required
              />
              <FormBorder />
              <Label style={{ paddingTop: "22px" }}>Password</Label>
              <FormContent
                id="user-password"
                class="form-content"
                type="password"
                name="password"
                autocomplete="on"
                required
              />
              <FormBorder />
              <A>
                <ForgotPassword>Lupa Password?</ForgotPassword>
              </A>

              <SubmitButton type="submit" name="submit" value="LOGIN" />
              <SignUp>Tidak Punya Akun ?</SignUp>
            </Form>
          </CardContent>
        </Card>
      </Body>
    </div>
  );
}

export default LoginComponents;
