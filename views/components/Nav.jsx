const React = require('react');

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <img src="/img/pokeball.png" />
                <a href="/pokemon">                
                    <h1>Pokedex</h1>
                </a>
                <a href="/pokemon/new" id="create">Create</a>
            </nav>
        )
    }
}

module.exports = Nav;