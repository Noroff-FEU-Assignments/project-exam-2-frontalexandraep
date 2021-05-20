import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { HelmetProvider } from "react-helmet-async";

import Home from "../home/Home.js";
import Accommodations from "../accommodations/Accommodations";
import Details from "../accommodations/Details";
import Contact from "../contact/Contact";
import Login from "../login/Login";
import Admin from "../admin/Admin";
import Enquiries from "../admin/pages/enquiries/Enquiries";
import Entries from "../admin/pages/entries/Entries";
import AddPage from "../admin/pages/addEstablishment/AddPage";

export default function Layout() {
  return (
    <AuthProvider>
      <HelmetProvider>
        <Router>
          <div className="wrapper">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/accommodations/" exact component={Accommodations} />
              <Route path="/accommodations/:id" component={Details} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/admin/enquiries" component={Enquiries} />
              <Route path="/admin/entries" component={Entries} />
              <Route path="/admin/add-establishment" component={AddPage} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </HelmetProvider>
    </AuthProvider>
  );
}
