import characters from "./services/characters";

function characterModal() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal__header">
          <h2>{character.name}</h2>
          <button className="modal__close-button"> X </button>

          <div className="modal__content">
            <h2>{character.name}</h2>
            <img src={characters.image} alt={character.name} />

            <div className="modal__text">
              <p>Status: {characters.status}</p>
              <p>Species: {characters.species}</p>
              <p>Gender: {characters.gender}</p>
              <p>Origin: {characters.origin}</p>
              <p>Location: {characters.location}</p>

              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;