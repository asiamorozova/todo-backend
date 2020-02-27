
const client = require('../lib/client');

// async/await needs to run in a function
run();

async function run() {

try {
    
    await client.connect();

    
    await client.query(`  
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(256) NOT NULL,
        hash VARCHAR(512) NOT NULL
    );  

    
            CREATE TABLE todos (
                id SERIAL PRIMARY KEY NOT NULL,
                task VARCHAR(512) NOT NULL,
                complete BOOLEAN NOT NULL DEFAULT FALSE,
                user_id INTEGER NOT NULL REFERENCES users(id)
        );
    `);

    console.log('create tables complete');
}
catch (err) {
    
    console.log(err);
}
finally {
    
    client.end();
}

}