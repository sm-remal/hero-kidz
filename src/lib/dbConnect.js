const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_DB;
const dbName = process.env.DB_NAME;

export const collections = {
    PRODUCTS: "products",
    USER: "user",
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect = (cname) => {
    return client.db(dbName).collection(cname);
}