const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
);

[`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach((eventType) => {
  process.on(eventType, () => driver.close());
});

const retrieveSession = () => driver.session();
const withinSession = async (fn) => {
  const session = retrieveSession();
  try {
    return fn({ session });
  } finally {
    session.close();
  }
}

module.exports = { retrieveSession, withinSession };