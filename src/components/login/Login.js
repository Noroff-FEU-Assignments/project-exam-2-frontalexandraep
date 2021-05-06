import { Helmet } from "react-helmet-async";
import Heading from "../common/Heading";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <>
      <Helmet>
        <title>Login | Holidaze</title>
      </Helmet>
      <Heading size="1" content="Admin" />
      <LoginForm />
    </>
  );
}

export default Login;
