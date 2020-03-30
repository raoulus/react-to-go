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
- [x] Dockerfile with Nginx as production server
- [ ] Github workflow (AWS S3 upload)
- [ ] Unit and component tests

**Demo**   
http://react-webpack-template.s3-website.eu-central-1.amazonaws.com/

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

## Docker build with Nginx
There's a npm command to build docker image using [Nginx](https://hub.docker.com/_/nginx).

```bash
# build image with tag react-webpack-template:1.0.0
npm run build:docker

# start image
docker run --name react-webpack-template --rm -p 3000:80 react-webpack-template:1.0.0

# go to http://localhost:3000
```
