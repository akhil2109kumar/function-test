Overview:

We will create a function that encodes a string into Base64 format. The function will be exposed via a public API and documented with a GET endpoint.

Step 1: Setup the Project

1️. Initialize a Node.js Project
Run the following command to create a new Node.js project:

mkdir funclive
cd funclive
npm init -y

This will generate a package.json file.

Step 2: Install Dependencies
Install Express.js and body-parser cors:

npm install express body-parser cors


Step 3: Create the Server (index.js)

Step 4: Test Locally Using Postman

1.Start the server:
npm start

2.Test API with Postman (or cURL):
POST request to http://localhost:3000/functions/base64New

{
  "input": "Hello, world"
}
Expected response:

{
  "output": "SGVsbG8sIHdvcmxk"
}

GET request to http://localhost:3000/functions/base64New
Should return the function documentation.

Step 5: Deploy to Render

Push Your Code to GitHub
Initialize Git and push code to GitHub

Deploy on Render
Go to https://dashboard.render.com/
Click "New Web Service" → Connect to GitHub
Select your GitHub repository
Choose:
Runtime: Node
Build Command: npm install
Start Command: npm start
Click "Deploy" and wait for deployment.

Step 6: Get Your Function URL

Once deployed, your function will be available at:

https://function-test-gdxn.onrender.com/functions/base64New

Test it with:

curl -X GET https://function-test-gdxn.onrender.com/functions/base64New


Step 7: Submit Function to func.live

1️⃣ Generate Your API Token
Go to https://tokens.wakeflow.io
Copy the generated token

2.Submit Your Function
Run this cURL command to submit:

curl -X POST https://api.func.live/functions    -H "Content-Type: application/json"    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJqNDVua2RwS3J2Y21Obmw5cWhTTHFMMWFQWVIyIiwibWljcm9zZXJ2aWNlcyI6WyJ3YWtlZmxvdy1lbWFpbHMiLCJ3YWtlZmxvdy10aW1lciIsIndha2VmbG93LTJmYSIsIndha2VmbG93LXBheW1lbnRzIiwid2FrZWZsb3ctdHdpbGlvIiwid2FrZWZsb3ctbnVtYmVyNCJdLCJpYXQiOjE3Mzg1OTk4MzIsImV4cCI6MTc3MDEzNTgzMn0.qAOgoEm0Vsa5TYEdUEryY_JQMBp3bmCr9ljDpe2YW0Q"    -d "{\"url\":\"https://function-test-gdxn.onrender.com/functions/base64New\"}"


Step 8: Test on func.live

Visit https://www.func.live
Search for base64New
Test your function
