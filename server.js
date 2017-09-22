const express = require("express");
const path = require('path');
const cors = require('cors');
const app = express();

// app.set("port", process.env.PORT || 8080);

// Express only serves static assets in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// app.listen(app.get("port"), () => {
//   console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
// });

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Server started on ${port}`);