deploy: | docker-run-frontend

docker-build-frontend:
	docker build \
		--pull \
		--target deploy \
		--file Dockerfile \
		--tag topgroupexpress/frontend \
		.

docker-run-frontend:
	git switch main; \
	git pull; \
  make docker-build-frontend; \
	docker stop topgroupexpress-www; \
	docker rm topgroupexpress-www; \
	docker run --detach \
		--restart always \
		--network tge \
		--hostname topgroupexpress-www \
		--name topgroupexpress-www \
		topgroupexpress/frontend;
