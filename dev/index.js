module.exports = function render (locals, callback) {
  callback(null, `<!DOCTYPE html>
    <html>
      <head>
          <title>Ugly Bunnies</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        Hello world
      </body>
    </html>
  `)
}