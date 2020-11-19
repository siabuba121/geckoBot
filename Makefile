default:
	docker exec -it geckoapidataclient_node_1 bash
up:
	docker-compose --env-file ./.env up -d
