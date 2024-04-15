export default [
	'strapi::logger',
	{
		name: 'strapi::errors', config: {
			enabled: true,
			origin: ['https://www.thedevmechanics.com'],
			headers: ['Content-Type', 'Authorization', 'X-Frame-Options'],
			methods: ['GET', 'POST'],
			credentials: true,
		}
	},
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					"connect-src": ["'self'", "https:"],
					"img-src": [
						"'self'",
						"data:",
						"blob:",
						"market-assets.strapi.io",
						"res.cloudinary.com",
					],
					"media-src": [
						"'self'",
						"data:",
						"blob:",
						"market-assets.strapi.io",
						"res.cloudinary.com",
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	'strapi::cors',
	'strapi::poweredBy',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];
