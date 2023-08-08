import AddCharacter from '../components/AddCharacter';
import CharacterModal from '../components/CharacterModal';

function Home() {
  return (
    <div>
      <h1>Rick and Morty Wiki</h1>
      <button onClick={openModal}>{AddCharacter}</button>
      <CharacterModal />
    </div>
  );
}

export default Home;