const
	express = require('express'),
	hbs = require('hbs'),
	app = express();

app.set('view engine','html');
app.engine('html',hbs.__express);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

require('./router')(app);
require('./mid')(app);

module.exports = app;