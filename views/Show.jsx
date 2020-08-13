const React = require('react');
const Default = require('./components/Default');

class Show extends React.Component {
    render(){
        const onePokemon = this.props.onePokemon;
        const stats = Object.entries(onePokemon.stats);
        return (
            <Default>
                <div className="show_wrap">
                    <img className="show_image" src={onePokemon.img} />
                    <div className="stats_wrap">
                        <div className="stats_wrap_inner">
                            <h2>{onePokemon.name}</h2>
                            <p className="stats_header">Types:</p>
                            <ul className="poke_types">
                                {onePokemon.type.map((type, i) => 
                                    <li key={i}>{type}</li>
                                )}
                            </ul>
                            <p className="stats_header">Stats:</p>
                            <ul className="poke_stats">
                                {stats.map((item, i) => {
                                    return <li key={i}>{item[0]}: {item[1]}</li>
                                })}
                            </ul>
                            <div className="actions_wrap">
                                <form action={`/pokemon/${this.props.index}?_method=DELETE`} method="POST">
                                    <button type="submit" value="DELETE">DELETE</button>
                                </form>
                                <a href={`/pokemon/${this.props.index}/edit`}>
                                    <button className="edit_btn">EDIT</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Default>
        );
    }
}

module.exports = Show;
