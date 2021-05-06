import { Helmet } from "react-helmet-async";
import Heading from "../../../common/Heading";
import EntriesList from "./EntriesList";

export default function Entries() {
  return (
    <>
      <Helmet>
        <title>Admin | Entries | Holidaze</title>
      </Helmet>
      <Heading size="1" content="Entries" />
      <EntriesList />
    </>
  );
}
