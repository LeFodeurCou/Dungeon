start:
	make start-server && make start-client

stop:
	make stop-client && make stop-server

start-server:
	cd server && docker compose up

stop-server:
	cd server && docker compose down

start-client:
	cd client && docker compose up

stop-client:
	cd client && docker compose down

prune:
	docker system prune -a