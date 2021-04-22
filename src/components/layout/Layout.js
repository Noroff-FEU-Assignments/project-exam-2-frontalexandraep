import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthProvider } from "../../context/AuthContext";
import Home from "../home/Home.js";

export default function Layout() {
  return (
    <AuthProvider>
      <Router>
        <div className="wrapper">
          <Container>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Container>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
