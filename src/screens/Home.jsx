import AddCharacter from '../components/AddChar';
import CharacterModal from '../components/CharInfo';

export default function Home() {
  return (
    <div>
      <h1>Rick and Morty Wiki</h1>
      <button onClick={openModal}>{AddCharacter}</button>
    </div>
  );
}

