process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.PORT = '3000';

require('./bin/www.server.bin');