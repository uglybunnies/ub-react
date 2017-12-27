module.exports = function render (locals, callback) {
  callback(null, `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ugly Bunnies</title>
        <link href='https://fonts.googleapis.com/css?family=Henny+Penny&text=Ugly%20Bunnies|Alegreya+Sans:300,300italic,500,500italic' rel='stylesheet' type='text/css'>
        <style>
        @font-face {
              font-family: 'fontello';
              src: url('font/fontello.eot?44546690');
              src: url('font/fontello.eot?44546690#iefix') format('embedded-opentype'),
                   url('font/fontello.woff?44546690') format('woff'),
                   url('font/fontello.ttf?44546690') format('truetype'),
                   url('font/fontello.svg?44546690#fontello') format('svg');
              font-weight: normal;
              font-style: normal;
            }
        </style>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="masthead pb">
            <div class="logo">
              <h1 class="site-name s1"><span>Ugly</span> <span>Bunnies</span></h1>
            </div>
            <a href="#" id="menu-control" class="pa2"><i class="icon-menu">&#xf0c9;</i></a>
        </header>
        <nav class="topnav mtn">
            <ul id="topNav" class="menu">
                <li class="menuItem1"><a href="/web-projects">Web Projects</a></li>
                <li class="menuItem2"><a href="">Art Projects</a></li>
                <li class="menuItem3"><a href="">Articles</a></li>
            </ul>
        </nav>
        <main>

        </main>
        <footer>
            <p>Copyright &copy; 2001-2018 Michael Wong. All Rights Reserved.</p>
        </footer>
        <script src="topNav.js"></script>
    </body>
</html>
  `)
}
