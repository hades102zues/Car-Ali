exports.up = function(knex, Promise) {
	return knex.schema.createTable("bids", table => {
		table.increments();
		table.float("bid").notNull();
		table
			.integer("user_id")
			.references("id")
			.inTable("users")
			.onDelete("CASCADE")
			.index();
		table
			.integer("listing_id")
			.references("id")
			.inTable("listings")
			.onDelete("CASCADE")
			.index();
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("bids");
};
