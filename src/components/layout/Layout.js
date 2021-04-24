import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthProvider } from "../../context/AuthContext";

import Home from "../home/Home.js";
import Accommodations from "../accommodations/Accommodations";
import Details from "../accommodations/Details";
import Enquiry from "../accommodations/Enquiry";

export default function Layout() {
  return (
    <AuthProvider>
      <Router>
        <div className="wrapper">
          <Container>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/accommodations/" exact component={Accommodations} />
              <Route path="/accommodations/:id" exact component={Details} />
              <Route path="/accommodations/enquiry/:id" component={Enquiry} />
            </Switch>
          </Container>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
