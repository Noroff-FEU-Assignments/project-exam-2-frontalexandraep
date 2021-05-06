import { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";

export default function DeleteEnquiry({ id }) {
  const [error, setError] = useState(null);

  const http = useAxios();
  const history = useHistory();

  const url = `enquiries/${id}`;

  async function handleReject() {
    const confirmReject = window.confirm("Reject this enquiry?");

    if (confirmReject) {
      try {
        await http.delete(url);
        history.push("/admin");
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }
  }

  return (
    <button type="button" className="btn__delete" onClick={handleReject}>
      {error ? "Error" : "Reject"}
    </button>
  );
}

DeleteEnquiry.propTypes = {
  id: PropTypes.number.isRequired,
};