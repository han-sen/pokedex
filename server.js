// <- DEPENDENCIES ================================ ->

const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;


// <- DATA ======================================== ->

const Pokemon = require('./models/pokemon.js');

// <- MIDDLEWARE ================================== ->

app.use(express.urlencoded({ extended: false }));//req.body
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(methodOverride('_method'));

// <- ROUTES ====================================== ->

// ROOT

app.get('/', (req, res) => {
    res.redirect('/pokemon');
});

// INDEX
app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemon: Pokemon });
});

// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

// DESTROY
app.delete('/pokemon/:index', (req, res)=>{
    Pokemon.splice(req.params.index, 1);
    res.redirect('/pokemon');
})

// UPDATE
app.put('/pokemon/:index', (req, res) => { 
    const newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.types.split(" "),
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
        }
    }
	Pokemon[req.params.index] = newPokemon; 
	res.redirect('/pokemon'); 
});

// CREATE
app.post('/pokemon', (req, res) => {
    const newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.types.split(" "),
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
        }
    }
    Pokemon.push(newPokemon);
    res.redirect('/pokemon');
});

// EDIT 
app.get('/pokemon/:index/edit', function(req, res){
	res.render('Edit', {
			onePokemon: Pokemon[req.params.index],
			index: req.params.index
		}
	);
});

// SHOW 
app.get('/pokemon/:index', (req, res) => {
    res.render('Show', { 
        index: req.params.index, 
        onePokemon: Pokemon[req.params.index] 
    });
});

app.listen(port, () => {
    console.log('running on port 3000');
});