// const express = require('express');
// const app = express();

// const {PORT = 3000} = process.env; 

// app.listen(PORT, () =>{
//     console.log('WATER GATORS');
// })

// app.get('/', (req, res) => {
//     res.send(
//       `<html>
//       <body>
//         <p>Response to the signal from distant space</p>
//       </body>
//       </html>`
//     );
//   });


const express = require('express');
const path = require('path');
const routes = require('./routes.js');

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const timeLog = (req, res, next) => {
  console.log(new Date());
  console.log(req.method);
  next();
};

app.use(timeLog);
app.use('localhost:', routes);
app.listen(PORT, () => {
  console.log('Link to the server:');
  console.log(BASE_PATH);
});