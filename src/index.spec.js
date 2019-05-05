const { assertThat, equalTo, hasProperty} = require('hamjest');
const { withinSession } = require('./connection');

describe('neo4j test', () => {
  it('verifies that records are cleaned up propperly', async () => {
    return withinSession(async ({ session }) => {
      const result = await session.run('MATCH (n) RETURN count(*) as count;');
      const numberOfRecords = parseInt(result.records[0].get(0).toString());
      assertThat(numberOfRecords, equalTo(0));
    });
  });

  it('creates a new user', () => {
    return withinSession(async ({ session }) => {
      const personName = 'Alice';
      const result = await session.run(
        'CREATE (a:Person {name: $name}) RETURN a',
        {name: personName}
      );

      const singleRecord = result.records[0];
      const node = singleRecord.get(0);

      assertThat(node.properties, hasProperty('name', equalTo(personName)));
    });
  });
});

