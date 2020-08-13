const React = require('react');
const Nav = require("./Nav");


class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css" type="text/css"/>
                    <title>Pokedex</title>
                </head>
                <body>
                    <Nav />
                    <div className="page_wrap">
                        <section className="content_wrap">
                            {this.props.children}
                        </section>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Default;