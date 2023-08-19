import AddChar from '../components/AddChar';
import CharInfo from '../components/CharInfo';

export default function Home() {
  return (
    <>
    <div className="header">
      <h1>Rick and Morty Wiki</h1>
      <button onClick={openModal}>{AddChar}</button>
      </div>
    <div className="char-grid"></div>
    </>

  );
}

