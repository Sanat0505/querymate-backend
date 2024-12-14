require("dotenv").config();

const config = {
  port: process.env.PORT || 3001,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  huggingFaceApiToken: process.env.HUGGING_FACE_API_TOKEN,
  infuraApiKey: process.env.INFURA_API_KEY,
};

module.exports = config;
