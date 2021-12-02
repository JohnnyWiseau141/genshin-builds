const CharacterIndex = (props) => {
  return (  
    <>
    <div className="characters-container">
      {props.characters.map(character =>
        <div key={character._id}>
              <img src={`https://api.genshin.dev/characters/${character}/icon`} alt="icon" />
        </div>
      )}
    </div>
    </>
  );
}
 
export default CharacterIndex;

