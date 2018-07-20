process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = '8081';

require('./bin/www.server.bin');

// initial dataset
// require('./src/bootstrap/init.server.bootstrap').initIngredient();