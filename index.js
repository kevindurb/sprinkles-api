require('dotenv').config();
const debug = require('debug')('sprinkles:index');
const app = require('./src/app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  debug(`app running on port ${PORT}`);
});
