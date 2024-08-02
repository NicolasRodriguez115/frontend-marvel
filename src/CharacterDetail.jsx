import React, { useState, useEffect } from "react";
import "./characterDetail.css"

const CharacterDetails = ({ character }) => {
    if (!character) {
        return null;
    }

  return (
    <>
    <div className="comic-details-container">
      <p>{character.description}</p>
      <h2>Comics</h2>
      <ul>
        {character.comics.items.map(comic => (
          <li key={comic.resourceURI}>{comic.name}</li>
        ))}
      </ul>

    </div>
    </>
  );
};

export default CharacterDetails;
