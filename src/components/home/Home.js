import Heading from "../common/Heading";
import SearchBar from "./search/SearchBar";
import Images from "./Images";

export default function Home() {
  return (
    <>
      <div className="hero-banner">
        <div className="hero-banner__content">
          <Heading
            size="2"
            content="Find the accommodation that suits your needs"
          />
          <SearchBar />
        </div>
      </div>
      <main className="home">
        <Heading size="1" content="Welcome to Bergen" />
        <Heading size="2" content="The gateway to the fjords of Norway" />
        <p>
          Experience the ideal combination of nature, culture, and exciting
          urban life
        </p>
        <Images />
      </main>
    </>
  );
}
