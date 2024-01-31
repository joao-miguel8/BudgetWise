import { belongsTo, createServer, hasMany, Model } from "miragejs";
import { registerTransactionRoutes } from "./routes";

// Define and configure our models and create mock-api server

export function makeServer() {
	const server = createServer({
		models: {
			transaction: Model.extend({
				transactionList: belongsTo(),
			}),
			transactionList: Model.extend({
				transaction: hasMany(),
			}),
		},
		routes() {
			this.urlPrefix = "/mock-api";
			registerTransactionRoutes(this);
		},
	});
	return server;
}
