import { Helmet } from "react-helmet-async";
import Heading from "../../../common/Heading";
import EnquiriesList from "./EnquiriesList";

export default function Enquiries() {
  return (
    <>
      <Helmet>
        <title>Admin | Enquiries | Holidaze</title>
      </Helmet>
      <Heading size="1" content="Enquiries" />
      <EnquiriesList />
    </>
  );
}
