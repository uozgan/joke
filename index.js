const express = require('express');

const app = express();

app.get("/Funny", onRequest)

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

const port = PORT || 3000;

app.listen(port, confirmation);

function confirmation(){
  console.log(`Listening on: ${port}`)
}