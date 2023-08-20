import { useEffect, useState } from 'react';
import AddChar from '../components/AddChar';
import { getCharacters } from '../services/characters';
import CharPreview from '../components/CharPreview';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);
  
  async function fetchCharacters() {
    const characters = await getCharacters()
    setCharacters(characters);
  }

  
  return (
    <>
    <div className="header">
      <h1>Rick and Morty Wiki</h1>
      <button onClick={setModal}><AddChar />Add Character</button>
    </div>
    <div className="char-grid">
        {characters.map((character) => (<CharPreview key={character.id} character={character} />))}
    </div>
    </>

  );
}

