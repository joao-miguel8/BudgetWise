import { belongsTo, createServer, hasMany, Model } from "miragejs";

// Define and configure our models and create mock-api server

export function makeServer() {
	const sever = createServer({
		models: {
			transaction: Model.extend({
				transactionList: belongsTo(),
			}),
			transactionList: Model.extend({
				transaction: hasMany(),
			}),
		},
	});
	return sever;
}
