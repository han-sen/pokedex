const React = require('react');
const Nav = require("./Nav");


class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
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