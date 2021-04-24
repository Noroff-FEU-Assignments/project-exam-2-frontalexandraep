import Heading from "../common/Heading";
import AccommodationsList from "./AccommodationsList";
import { Helmet } from "react-helmet";

export default function Accommodations() {
  return (
    <>
      <Helmet>
        <title>Accommodations | Holidaze</title>
      </Helmet>
      <div className="hero-banner__accommodations">
        <div className="hero-banner__accommodations--content">
          <Heading size="2" content="Accommodations" />
        </div>
      </div>
      <main className="accommodations">
        <AccommodationsList />
      </main>
    </>
  );
}
