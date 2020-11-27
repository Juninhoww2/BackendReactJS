// Update with your config settings.

module.exports = {
    devolopment: {
        client: "sqlite3",
        connection: {
            filename: "./src/database/db.sqlite"
        },
        migrations: {
            directory: "./src/database/migrations"
        },
        useNull
    }
}