const redis = require("redis");
// const { promisify } = require("util");
const client = redis.createClient();

client.on('error', err => console.log('Redis Client Error', err));

client.connect();

client.set('age', '12');

async function getValue() {
  const value = await client.get('age');
  console.log(value);
}
getValue();

// client.disconnect();