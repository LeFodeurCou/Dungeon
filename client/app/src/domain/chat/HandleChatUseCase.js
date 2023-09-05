export class HandleChatUseCase {
	constructor(socketAdapter) {
		this.socketAdapter = socketAdapter;
	}

	execute() {
		const messages = document.getElementById('messages');
		const form = document.getElementById('form');
		const input = document.getElementById('input');

		form.addEventListener('submit', e => {
			e.preventDefault();
			if (input.value) {
				this.socketAdapter.emit('chat message', {message: input.value, test: 'toto'})
				input.value = '';
			}
		});

		this.socketAdapter.addEvent('chat message', function(message) {
			const item = document.createElement('li');
			item.textContent = message;
			messages.appendChild(item);
			window.scrollTo(0, document.body.scrollHeight);
		});
	}
}