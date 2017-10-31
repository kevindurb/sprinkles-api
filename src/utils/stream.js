module.exports = {
  streamQuery(res, presenter, query) {
    const stringify = data =>
      JSON.stringify(presenter(data));

    res.set('Content-Type', 'application/json');
    res.write('[');

    let isFirst = true;
    query.cursor()
      .on('data', (doc) => {
        if (!isFirst) {
          res.write(',');
        }
        res.write(stringify(doc));
        isFirst = false;
      })
      .on('end', () => {
        res.end(']');
      });
  }
};
