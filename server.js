// <- DEPENDENCIES ================================ ->

const express = require('express');
const methodOverride = require('method-override');
const app = express();

// <- DATA ======================================== ->

const Pokemon = require('./models/pokemon.js');

// <- MIDDLEWARE ================================== ->

app.use(express.urlencoded({ extended: false }));//req.body
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(methodOverride('_method'));

// <- ROUTES ====================================== ->

// sorting function

handleSort = (sortKey) => {
    const newArr = [...Pokemon];
    return newArr.sort((a,b) => a[sortKey] < b[sortKey] ? -1 : 1);
}

// INDEX
app.get('/pokemon', (req, res) => {
    const sortedPokemon = handleSort(req.query.sortKey);
    if (sortedPokemon) {
        // if query is not undefined deliver sorted arr
        res.render('Index', { pokemon: sortedPokemon });
        // else just give data as is
    } else {
        res.render('Index', { pokemon: Pokemon });
    }
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

app.listen(3000, () => {
    console.log('running on port 3000');
});