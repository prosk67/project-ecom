import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL);

export async function connectToDatabase() {
  if (client.isConnected()) {
    return client.db();
  }

  await client.connect();
  return client.db();
}
