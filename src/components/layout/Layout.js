import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthProvider } from "../../context/AuthContext";
import { HelmetProvider } from "react-helmet-async";

import Home from "../home/Home.js";
import Accommodations from "../accommodations/Accommodations";
import Details from "../accommodations/Details";

export default function Layout() {
  return (
    <AuthProvider>
      <HelmetProvider>
        <Router>
          <div className="wrapper">
            <Container>
              <Nav />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route
                  path="/accommodations/"
                  exact
                  component={Accommodations}
                />
                <Route path="/accommodations/:id" exact component={Details} />
              </Switch>
            </Container>
          </div>
          <Footer />
        </Router>
      </HelmetProvider>
    </AuthProvider>
  );
}
