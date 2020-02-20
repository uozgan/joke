const express = require('express');

const app = express();

app.get("", onRequest)

function onRequest(request, response){
  response.send(page);
}

const page = `<html>
<head>
<title>Utku Ozgan</title>

<style> h1{text-align: center}
p{text-align: center; font-size: 20px}
.tek{background-color: orange;}
</style>
</head>
<body class="tek">
<h1>What do you call a pig that does karate?</h1>
<br><br><br>
<p>A pork chop</p>
</body>
</html>`

const port = process.env.PORT || 3000;

app.listen(port, confirmation);

function confirmation(){
  console.log(`Listening on: ${port}`)
}