import { HandleChatUseCase } from "./domain/chat/HandleChatUseCase.js";
import { SocketAdapter } from "./infra/adapters/SocketAdapter/SocketAdapter.js";

const socketAdapter = (new SocketAdapter({port: 3000, origin: 'http://localhost:1234'}))
	.listen();

const chatHandler = (new HandleChatUseCase(socketAdapter)).execute();