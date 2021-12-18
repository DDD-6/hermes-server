E2E_FILE=-f test-compose.yml
E2E_PROJECT=-p hermes-e2e

DEV_PROJECT=-p hermes

all: dev

dev:
	docker compose ${DEV_PROJECT} up --build

test: clean_e2e
	docker compose ${E2E_PROJECT} ${E2E_FILE} up --build \
    --abort-on-container-exit \
    --exit-code-from e2e-test

clean:
	docker compose ${DEV_PROJECT} down

clean_e2e:
	docker compose ${E2E_PROJECT} ${E2E_FILE} down -v

.PHONY: clean_e2e test all dev clean