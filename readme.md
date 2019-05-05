# Testing external systems with NEO4J

## Installation
```
docker-compose up -d
npm run test -- --watch
```

## Task
- Start the tests
- one test is failing after the second run
- run the second test within a transaction so that the first test doesn't fail
-