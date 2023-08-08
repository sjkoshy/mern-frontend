import { createCharacter } from "../services/characters";

function addCharacter() {
  return (
    <div>
      <label>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="status" placeholder="Status" />
        <input type="text" name="species" placeholder="Species" />
        <input type="text" name="gender" placeholder="Gender" />
        <input type="text" name="origin" placeholder="Origin" />
        <input type="text" name="location" placeholder="Location" />
        <input type="text" name="image" placeholder="Image Link" />
      </label>
    </div>
  )
}

export default addCharacter;

{ createCharacter }