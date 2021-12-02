import { Link } from 'react-router-dom'

const CharacterIndex = (props) => {
  return (  
    <>
    <div className="characters-container">
      {props.characters.map(character =>
        <div key={character._id}>
          <div className="card">
            {/* add character images later */}
          </div>
        </div>
      )}
    </div>
    </>
  );
}
 
export default CharacterIndex;