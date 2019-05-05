# Testing external systems with NEO4J

## Installation
```bash
docker-compose up -d # start neo4j
docker-compose down -v # stop and remove volumes from neo4j
npm run test -- --watch
```

## Task
- Start the tests
- one test is failing after the second run
- run the second test within a transaction so that the first test doesn't fail
- if the counter of the first failing test doesn't go up you've done it
