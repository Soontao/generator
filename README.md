# Express Generator Fork

> Forked express generator, default view engine is hbs, and with es6 native support

## Installation

```bash
npm install -g https://github.com/Soontao/generator
```

## Quick Start

The quickest way to get started with express is to utilize the executable `express(1)` to generate an application as shown below:

Create the app:

```bash
express --view=hbs /tmp/foo && cd /tmp/foo
```

Install dependencies:

```bash
npm install
```

Start your Express.js app at `http://localhost:3000/`:

```bash
npm start
```

## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
    -v, --view <engine> add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory

## License

[MIT](LICENSE)