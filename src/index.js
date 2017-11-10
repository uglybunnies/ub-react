module.exports = function render (locals, callback) {
  callback(null, `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ugly Bunnies</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
          <header class="masthead pb">
              <div class="logo">
                  <h1 class="site-name s1"><span>Ugly</span> <span>Bunnies</span></h1>
              </div>
              <a href="#" id="menu-control" class="pa2">menu</a>
          </header>
          <nav class="topnav mtn">
            <ul id="topNav" class="menu">
                <li class="menuItem1"><a href="">Design</a></li>
                <li class="menuItem2"><a href="">Art</a></li>
                <li class="menuItem3"><a href="">Articles</a></li>
            </ul>
        </nav>
      </body>
    </html>
  `)
}
