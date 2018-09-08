import server from './server';
import express from 'express';
import basicroutes from './middleware';

server.use('/api',basicroutes);
server.use('/msg',basicroutes);
server.set('port', process.env.port || 5050)
server.listen(server.get('port'),()=> console.log(`Servcie started at PORT ${server.get('port')}`));
console.log("started servcies is complete ");