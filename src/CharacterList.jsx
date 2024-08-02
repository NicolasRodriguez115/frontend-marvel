import React, { useState, useEffect } from "react";
import axios from "axios";
import "./characterlist.css"

const CharacterList = ({ onCharacterSelect }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const publicKey = "083339fb86c2d34d1c0dee0e65124656";
  const hash = "ec332b8873ae1d7ebf94df53cd3d4932";

  const fetchCaracters = async () => {
    const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;

    try {
      const response = await axios.get(url);
      const data = response.data.data.results;
      setCharacters(data);
      setLoading(false);
      console.log("success");
    } catch (error) {
      setError("Error fetching character list");
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCaracters();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1>Characters List</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
              width={100}
              onClick={() => {
                onCharacterSelect(character);
              }}
            />
            {character.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CharacterList;
