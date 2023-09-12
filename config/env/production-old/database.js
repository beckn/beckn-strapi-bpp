module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'strapi'),
			user: env('DATABASE_USERNAME', 'beckn '),
			password: env('DATABASE_PASSWORD', 'Beckn$trap!1'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
