/* c8 ignore start */
const express = require('express');

const app = express();
app.use(express.static('./dist-vue'));
app.listen(4185);
/* c8 ignore stop */
