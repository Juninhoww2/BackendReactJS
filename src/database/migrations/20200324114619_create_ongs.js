exports.up = function(knex) {
    return knex.schema.createTable("ongs", function(table) {
        table.string("id").primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.sting("whatsapp").notNullable();
        table.sting("city").notNullable();
        table.sting("uf").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("ongs");
};
