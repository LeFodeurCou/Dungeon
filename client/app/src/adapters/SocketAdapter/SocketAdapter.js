export class SocketAdapter {
	constructor (url) {
		this.socket = io(url);
	}

	addEvent(eventLabel, eventAction) {
		console.groupCollapsed(eventLabel);
		this.socket.on(eventLabel, eventAction);
		console.groupEnd();
		return this;
	}

	emit(eventLabel, message) {
		this.socket.emit(eventLabel, message);
	}
}