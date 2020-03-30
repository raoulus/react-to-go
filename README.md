# :seedling: Seed project for React using webpack and express

![CI](https://github.com/raoulus/react-webpack-template/workflows/CI/badge.svg)
![Last commit](https://img.shields.io/github/last-commit/raoulus/react-webpack-template "Last commit")
![Dependency Tracker](https://img.shields.io/david/dev/raoulus/react-webpack-template "Dependency Tracker")


This seed repository is useful to quickly bootstrap your React application so that you can start coding right away. The setup is self made and tries to have less dependencies as possible.

**Features**

- [x] React 16.13.1
- [x] Less 3.11.1
- [x] Webpack 4.42.1 and Webpack dev server 3.10.3 including hot reloading
- [x] Babel loader 8.1.0 and Babel core 7.9.0
- [x] ESLint 6.8.0
- [x] prettier 2.0.2
- [ ] Unit and component tests
- [ ] Dockerfile with Nginx as production server


## Getting started

```bash
# build production bundle in /public
npm run build

# start webpack dev server with hot reloading
# visit http://localhost:9000
npm run dev

# start express server
npm start
```

## Linting and formatting
This project uses [prettier](https://github.com/prettier/prettier) for code formatting in conjunction with [ESLint](https://github.com/eslint/eslint) for code linting and fixing.

```bash
npm run lint
```

To enjoy automatic linting and formatting  the following configuration for [Visual Studio Code](https://github.com/microsoft/vscode) can be used.

*settings.json*
```json
{
    "editor.formatOnSave": false,
    "[json]": {
        "editor.formatOnSave": true,
    },
    "[less]": {
        "editor.formatOnSave": true,
    },
    "[javascript]": {
        "editor.formatOnSave": false,
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true,
        "source.fixAll.tslint": true
    },
    "eslint.validate": ["javascriptreact"],
    "javascript.format.enable": false,
    "javascript.validate.enable": false,
}

```

