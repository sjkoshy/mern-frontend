import { deleteCharacter, updateCharacter } from "../services/characters";
import characters from "./services/characters";

export default function CharInfo() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal__header">
          <h2>{characters.name}</h2>
          <button className="modal__close-button"> X </button>

          <div className="modal__content">
            <h2>{characters.name}</h2>
            <img src={characters.image} alt={characters.name} />

            <div className="modal__text">
              <p>Status: {characters.status}</p>
              <p>Species: {characters.species}</p>
              <p>Gender: {characters.gender}</p>
              <p>Origin: {characters.origin}</p>
              <p>Location: {characters.location}</p>

              <button className="edit">{updateCharacter}</button>
              <button className="delete">{deleteCharacter}</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
