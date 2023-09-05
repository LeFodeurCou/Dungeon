import { SocketAdapter } from "./adapters/SocketAdapter/SocketAdapter";
import { HandleChatUseCase } from "./domain/chat/HandleChatUseCase";

const socketAdapter = (new SocketAdapter('http://localhost:3000'));
const chatHandler = (new HandleChatUseCase(socketAdapter)).execute();