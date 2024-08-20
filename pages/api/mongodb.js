import mongoose from "mongoose";

const mySecret = process.env.MONGODB_URI

if (!mySecret) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(`mongodb+srv://sharonsandeep46655:${mySecret}@vavedb.w3ujkzd.mongodb.net/?retryWrites=false&w=majority`, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
