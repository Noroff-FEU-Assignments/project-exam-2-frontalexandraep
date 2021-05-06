import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";

export default function Admin() {
  return (
    <>
      <Helmet>
        <title>Admin | Holidaze</title>
      </Helmet>
      <Container className="admin">
        <Heading size="1" content="Admin" />
        <Link to="/admin/enquiries">View all enquiries</Link>
        <Link to="/admin/entries">View all entries</Link>
        <Link to="/admin/add-establishment">Add new establishment</Link>
      </Container>
    </>
  );
}
