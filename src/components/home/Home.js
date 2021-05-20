import Container from "react-bootstrap/Container";
import Heading from "../common/Heading";
import SearchBar from "./search/SearchBar";
import Images from "./content/Images";

export default function Home() {
  return (
    <>
      <div className="hero-banner">
        <div className="hero-banner__content">
          <Heading
            size="2"
            content="Find the accommodation that suits your needs in bergen"
          />
          <SearchBar />
        </div>
        <a href="#home"><div id="home" className="arrow"></div></a>
      </div>
      <Container className="home">
        <div className="home__text">
          <Heading size="1" content="Welcome to Bergen" />
          <Heading size="2" content="The gateway to the fjords of Norway" />
          <p>
            Experience the ideal combination of nature, culture, and exciting
            urban life
          </p>
        </div>
        <Images />
        <a href="/accommodations" className="home__button">
          View all accommodations
          <i className="fas fa-chevron-right home__button__icon"></i>
        </a>
      </Container>
    </>
  );
}
