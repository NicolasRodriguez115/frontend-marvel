import { useState } from "react";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetail";
import "../src/apps.css"
function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <>
      <CharacterList onCharacterSelect={handleCharacterSelect} />
      {selectedCharacter && (
        <CharacterDetails character={selectedCharacter} />
      )}
    </>
  );
}

export default App;
