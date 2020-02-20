const express = require('express');

const app = express();

app.get("/", onRequest)

function onRequest(request, response){
  response.send(page);
}

const page = `<html>
<head>
<title>Utku Ozgan</title>
</head>
<body>
<h1>What do you call a pig that does karate?</h1>

<p>A pork chop</p>
</body>
</html>`

const port = process.env.PORT || 3000;

app.listen(port, confirmation);

function confirmation(){
  console.log(`Listening on: ${port}`)
}