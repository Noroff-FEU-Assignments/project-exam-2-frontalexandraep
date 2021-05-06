import { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";

export default function DeleteEntry({ id }) {
  const [error, setError] = useState(null);

  const http = useAxios();
  const history = useHistory();

  const url = `contacts/${id}`;

  async function handleDelete() {
    const confirmDelete = window.confirm("Delete this entry?");

    if (confirmDelete) {
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
    <button type="button" className="btn__delete" onClick={handleDelete}>
      {error ? "Error" : "Delete"}
    </button>
  );
}

DeleteEntry.propTypes = {
  id: PropTypes.number.isRequired,
};
