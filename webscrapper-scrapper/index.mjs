import pgPromise from 'pg-promise';

const pgp = pgPromise();

const config = {
    host: 'localhost',
    port: 5432,
    database: 'scrapper-pages',
    user: 'postgres',
    password: 'secretsPassword123',
    max: 30
}

const db = pgp(config);

console.log(db);
console.log('lool');

db.any('SELECT * FROM pages')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

console.log('lol')