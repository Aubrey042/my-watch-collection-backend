const pg = require('pg');

const client = new pg.Client('postgres://localhost:5433/WatchCollectionDB');
console.log(client);

client.connect((err) => {
    if (err) {
        console.log('Connection error', err.stack);
    } else {
        console.log('Connected to watch DB');
    }
});


async function getAllWatches() {
try {
    const {rows: watches} = await client.query(`
    SELECT * FROM watches;
    
    
    `);
    console.log(watches);
} catch (error) {
    console.error(error);
}

}



const init = async () => {

    try {
        getAllWatches(); 
    } catch (error) {
        
    }
}
init();