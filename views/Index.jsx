const React = require("react");
const Default = require("./components/Default");

class Index extends React.Component {
    render() {
        return (
            <Default>
                <div className="sort_wrap">
                    <h3>Sort by:</h3>
                    <div className="sort_button_wrap">
                        <a href="/pokemon?sortKey=name">
                            <button className="sort_button">A-Z</button>
                        </a>
                        <a href="/pokemon?sortKey=index">
                            <button className="sort_button">Index</button>
                        </a>
                        <a href="/pokemon?sortKey=type">
                            <button className="sort_button">Type</button>
                        </a>
                    </div>
                </div>
                {this.props.pokemon.map((pokemon, index) => {
                    return (
                        <a href={`/pokemon/${pokemon.id - 1}`}>
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