const assert = require('node:assert/strict');
const { once } = require('node:events');
const bcrypt = require('bcrypt');

async function main() {
  const password = 'migration-smoke-test';
  const hash = await new Promise((resolve, reject) => {
    bcrypt.hash(password, 4, (error, value) => error ? reject(error) : resolve(value));
  });
  assert.equal(await bcrypt.compare(password, hash), true);
  assert.equal(await bcrypt.compare('wrong', hash), false);
  // Use an in-memory database double; never connect to or modify a real database.
  const databasePath = require.resolve('../server/database');
  require.cache[databasePath] = { id: databasePath, filename: databasePath, loaded: true, exports: {
    query(sql, values, callback) {
      assert.match(sql, /^SELECT \* FROM logins/);
      callback(null, values[0] === 'test@example.invalid' ? [{
        id: 1, password: hash, isAdmin: false, fullName: 'Smoke Test'
      }] : []);
    }
  }};
  process.env.COOKIE_SESSION_SECRET = 'local-smoke-test-only';
  const app = require('../server/server');
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    assert.equal((await fetch(base)).status, 200);
    assert.deepEqual(await (await fetch(`${base}/logout`)).json(), { status: false });
    for (const [type, body] of [
      ['application/json', JSON.stringify({username: 'test@example.invalid', password})],
      ['application/x-www-form-urlencoded', new URLSearchParams({username: 'test@example.invalid', password}).toString()]
    ]) {
      const response = await fetch(`${base}/login`, {method: 'POST', headers: {'Content-Type': type}, body});
      assert.equal(response.status, 200);
      assert.deepEqual(await response.json(), {status: 'success', isAdmin: false});
      assert.ok(response.headers.get('set-cookie'));
    }
    const rejected = await fetch(`${base}/login`, {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({username:'test@example.invalid',password:'wrong'})});
    assert.equal(rejected.status, 401);
    console.log('PASS: native bcrypt, static page, logout, JSON/form login, session cookies, incorrect-password rejection');
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
