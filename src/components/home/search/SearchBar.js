import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";

export default function SearchBar() {
  const [establishments, setEstablishments] = useState([]);
  const [establishmentMatch, setEstablishmentMatch] = useState([]);
  const url = BASE_URL + "establishments";

  useEffect(() => {
    const loadEstablishments = async () => {
      const response = await axios.get(url);
      setEstablishments(response.data);
    };

    loadEstablishments();
  }, [url]);

  console.log(establishments);

  const searchEstablishments = (text) => {
    if (!text) {
      setEstablishmentMatch([]);
    } else {
      let matches = establishments.filter((establishment) => {
        const regex = new RegExp(`${text}`, "gi");
        return establishment.name.match(regex);
      });
      setEstablishmentMatch(matches);
    }
  };

  return (
    <>
      <div className="search-bar">
        <input
          placeholder="Search..."
          onChange={(e) => searchEstablishments(e.target.value)}
        />
      </div>
      <div className="search-bar__results">
        <ul className="search-bar__results__list">
          {establishmentMatch.map((estab) => (
            <li className="search-bar__results__list--item" key={estab.id}>
              <Link to={`accommodations/${estab.id}`}>{estab.name}</Link>
              <img src={estab.image[0].url} alt={estab.name} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
