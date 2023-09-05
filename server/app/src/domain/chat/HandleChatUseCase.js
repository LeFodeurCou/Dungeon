export class HandleChatUseCase {
	constructor(socketAdapter) {
		this.socketAdapter = socketAdapter;
	}

	execute() {
		this.socketAdapter.addEvent('chat message', message => {
			console.log(message);
			this.socketAdapter.emit('chat message', message.message);
		});
	}
}