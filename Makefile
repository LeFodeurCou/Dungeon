start-all: start-server-dettached start-client-dettached

stop-all: stop-client stop-server

start-server:
	cd server && docker compose up

start-server-dettached:
	cd server && docker compose up -d

stop-server:
	cd server && docker compose down

start-client:
	cd client && docker compose up

start-client-dettached:
	cd client && docker compose up -d

stop-client:
	cd client && docker compose down

prune:
	docker system prune -a