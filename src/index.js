const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Post Api for add a function call here

app.post("/functions/base64New", (req, res) => {
  const { input } = req.body;
  if (!input || typeof input !== "string") {
    return res.status(400).json({ error: "Invalid input, expected a string." });
  }
  const output = Buffer.from(input).toString("base64");
  res.json({ output });
});

// Documentation Endpoint
app.get("/functions/base64New", (req, res) => {
  res.json({
    name: "base64New",
    description: "Encode anything to base64",
    input: {
      type: "string",
      description: "Input the data you'd like to encode to base64",
      example: "Hello, world",
    },
    output: {
      type: "string",
      description: "Base64 encoded string",
      example: "SGVsbG8sIHdvcmxk",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
