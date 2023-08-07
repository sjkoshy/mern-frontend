import AddButton from '../components/AddButton';
import CharacterModal from '../components/CharacterModal';

function Home() {
  return (
    <div>
      <h1>Rick and Morty Wiki</h1>
      <AddButton />
      <CharacterModal />
    </div>
  );
}

export default Home;