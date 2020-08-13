const React = require("react");
const Default = require("./components/Default");

class Index extends React.Component {
    render() {
        return (
            <Default>
                {this.props.pokemon.map((pokemon, index) => {
                    return (
                        <a href={`/pokemon/${index}`}>
                            <div key={pokemon.name} className="poke_wrap">
                                <p key={index} className="poke_title">{pokemon.name}</p>
                                <p key={index} className="poke_type_wrap">                                    
                                    {pokemon.type.map(type => <span className="poke_type">{type}</span>)}
                                </p>
                                <img src={pokemon.img} className="poke_img"/>
                            </div>
                        </a>
                    );
                })}
            </Default>
        );
  }
}

module.exports = Index;