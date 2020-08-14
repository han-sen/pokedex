const React = require("react");
const Default = require("./components/Default");

class Edit extends React.Component {
  render() {
    const pokemon = this.props.onePokemon;
    return (
        <Default>
            <div>
                <h2>Edit: {pokemon.name}</h2>
                <img src={pokemon.img}/>
                <form action={`/pokemon/${this.props.index}?_method=PUT`} method="POST">
                  <div className="field">
                    <label className="label">Name:</label>
                    <input type="text" name="name" defaultValue={pokemon.name}/> 
                  </div>        
                  <div className="field">
                    <label className="label">Image:</label>
                    <input type="url" name="img" value={pokemon.img ? pokemon.img : "https://hansen-pokedex.herokuapp.com/img/pokeball.png"}/>
                  </div>
                  <div className="field">                    
                    <label className="label">Types (seperate by spaces):</label>
                    <input type="text" name="types" value={pokemon.type.join(" ")}/>
                  </div>            
                  <div className="field">   
                    <label className="label">HP:</label>
                    <input type="number" name="hp" value={pokemon.stats.hp}/>
                  </div>
                  <div className="field">
                    <label className="label">Attack:</label>
                    <input type="number" name="attack" value={pokemon.stats.attack}/>                    
                  </div>
                  <div className="field"> 
                    <label className="label">Defense:</label>
                    <input type="number" name="defense" value={pokemon.stats.defense}/>
                  </div>
                  <div className="field"> 
                    <label className="label">Sp Attack:</label>
                    <input type="number" name="spattack" value={pokemon.stats.spattack}/>
                  </div>
                  <div className="field"> 
                    <label className="label">Sp Defense:</label>
                    <input type="number" name="spdefense" value={pokemon.stats.spdefense}/>
                  </div>
                  <div className="field"> 
                    <label className="label">Speed:</label>
                    <input type="number" name="speed" value={pokemon.stats.speed}/>
                  </div>
                  <div className="field"> 
                    <label className="label">Id:</label>
                    <input type="number" name="id" defaultValue={pokemon.id} readOnly/>
                  </div>
                  <button type="submit" name="" value="Submit Changes">SUBMIT CHANGES</button>
                </form>
            </div>
      </Default>
    );
  }
}
module.exports = Edit;
