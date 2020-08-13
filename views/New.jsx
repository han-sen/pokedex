const React = require('react');
const Default = require('./components/Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h2>Add a new Pokemon</h2>
                    <form action="/pokemon" method="POST">
                        <div className="field">
                            <label className="label">Name:</label>
                            <input type="text" name="name"/> 
                        </div>        
                        <div className="field">
                            <label className="label">Image:</label>
                            <input type="url" name="img" defaultValue="http://localhost:3000/img/pokeball.png"/>
                        </div>
                        <div className="field">                    
                            <label className="label">Types (seperate by spaces):</label>
                            <input type="text" name="types"/>
                        </div>            
                        <div className="field">   
                            <label className="label">HP:</label>
                            <input type="number" name="hp"/>
                        </div>
                        <div className="field">
                            <label className="label">Attack:</label>
                            <input type="number" name="attack"/>                    
                        </div>
                        <div className="field"> 
                            <label className="label">Defense:</label>
                            <input type="number" name="defense"/>
                        </div>
                        <div className="field"> 
                            <label className="label">Sp Attack:</label>
                            <input type="number" name="spattack"/>
                        </div>
                        <div className="field"> 
                            <label className="label">Sp Defense:</label>
                            <input type="number" name="spdefense"/>
                        </div>
                        <div className="field"> 
                            <label className="label">Speed:</label>
                            <input type="number" name="speed"/>
                        </div>
                        <button type="submit">Create Pokemon</button>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = New;
