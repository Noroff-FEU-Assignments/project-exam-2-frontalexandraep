import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <div className="spinner-container" role="status">
      <Spinner animation="border">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
