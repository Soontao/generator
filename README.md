# Express Generator Fork

> Forked express generator, default view engine is hbs, and with es6 support powered by babel.js

## Installation

```bash
npm install -g https://github.com/Soontao/generator
```

## Quick Start

The quickest way to get started with express is to utilize the executable `express` to generate an application as shown below:

Create the app named 'WebApp' :

```bash
express WebApp && cd WebApp
```

Install dependencies:

```bash
npm install
```

Start your Express.js app at `http://localhost:3000/`:

```bash
npm start
```

## Warning

The generated proj will based on `@std/esm` module, the module will support *import/export* for nodejs

Please don't change `bin/www` file. It inlclude `@std/ems` for import modules.

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
