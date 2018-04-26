import compiler from './compiler.js';

test('converts kraken properties file into js object', async () => {
  const stats = await compiler('strings.properties');
  // get the source from the compiler
  // strip out the export statement (from json-loader), so we can parse json
  const output = JSON.parse(
    stats.toJson().modules[0].source.replace('module.exports = ','')
  );
  expect(typeof output).toBe('object');
  expect(typeof output.foo).toBe('object');
  expect(typeof output.foo.bar).toBe('string');
});