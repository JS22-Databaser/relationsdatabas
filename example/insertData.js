const db = require('./db');

function insert() {
    const [insult, play] = process.argv.slice(2);

    db.run(
        `INSERT INTO insults (insult, play) VALUES (?, ?)`,
        [insult, play],
        (error) => {
            if (error) {
                console.error(error.message);
            }
            console.log(`Inserted a row`);
        }
    );
}

insert();