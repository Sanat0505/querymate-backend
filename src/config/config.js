require("dotenv").config();

const config = {
  port: process.env.PORT || 3001,
  mongoURI:
    process.env.MONGO_URI ||
    "mongodb+srv://sanatkakadiya55:Sanat2002@demo.pwct1gx.mongodb.net/?retryWrites=true&w=majority&appName=demo",
  jwtSecret:
    process.env.JWT_SECRET ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTQyY2JjZDg5YjVjZTU1OGE3NWZjOSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczMzU3OTU2MiwiZXhwIjoxNzMzNTgzMTYyfQ.yk6pou9hgfTU2Ab3z2HtieSGciRjwRd86qU1yDHqSiI",
  huggingFaceApiToken: process.env.HUGGING_FACE_API_TOKEN,
  infuraApiKey: process.env.INFURA_API_KEY,
};
module.exports = config;
