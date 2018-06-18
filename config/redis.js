import { createClient } from 'redis';
import { Nohm } from 'nohm';

const client = createClient({
    // password: 'bunkey-token-123456',
    port: 6379,
    host: 'redis',
    // host: 'locahost',
});
// console.log(client);
client.on('connect', function() {
    client.select(0);
    Nohm.setClient(client);
    // Nohm.setPrefix('bunkey');
});


module.exports = {
    nohm: Nohm,
};
