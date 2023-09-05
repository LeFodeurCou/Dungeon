import { createServer } from "http";
import { Server } from "socket.io";

export class SocketAdapter {
	constructor({port, origin}) {
		this.port = port;
		this.http = createServer();
		this.io = new Server(this.http, {
			cors: {
				origin,
				methods: ["GET", "POST"]
			}
		});
	}

	addEvent(eventLabel, eventAction) {
		this.io.on('connection', (socket) => {
			console.groupCollapsed(eventLabel);
			socket.on(eventLabel, eventAction);
			console.groupEnd();
		});
		return this;
	}


	emit(eventLabel, message) {
		this.io.emit(eventLabel, message);
	}

	listen() {
		this.http.listen(this.port, () => {
			console.log(`Socket.IO server running at http://localhost:${this.port}/`);
		});
		return this;
	}
}