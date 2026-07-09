import { MongoClient } from "mongodb";

// Get MongoDB connection string from environment variables
const uri = process.env.MONGODB_URI;

// Throw an error if URI is missing
if (!uri) {
  throw new Error("Please add MONGODB_URI to your .env.local file.");
}

// MongoDB client instance
let client;

// Promise that resolves to the connected client
let clientPromise;

// Development Mode
if (process.env.NODE_ENV === "development") {
  // Reuse the same connection during hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);

    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
}

// Production Mode
else {
  // Create a fresh connection
  client = new MongoClient(uri);

  clientPromise = client.connect();
}

// Export the connected client
export default clientPromise;
