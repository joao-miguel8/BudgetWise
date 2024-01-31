import { Server } from "miragejs";
import { getAllTransactions } from "./transaction/getAllTransaction";

export function registerTransactionRoutes(context: Server) {
	return [context.get("/transaction/:transactionId", getAllTransactions)];
}
