# axios-express-proxy

A lightweight package for proxying express request to axios request and send back the response.

The package can also send just the express request to as an axios request and just the axios response as the express response.

## Usage

```js
import express from 'express';
import { Proxy } from 'axios-express-proxy';
const app = express();
const port = 3000;

app.get('/', (req, res) => Proxy('http://localhost:8080', req, res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

## Installation

```bash
$ npm install axios-express-proxy
```
