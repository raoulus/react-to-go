# :seedling: Seed project for React and webpack

![CI](https://github.com/raoulus/react-to-go/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/raoulus/react-to-go/branch/master/graph/badge.svg)](https://codecov.io/gh/raoulus/react-to-go)
![Last commit](https://img.shields.io/github/last-commit/raoulus/react-to-go 'Last commit')
![Dependency Tracker](https://img.shields.io/david/dev/raoulus/react-to-go 'Dependency Tracker')

Clone this repository and start coding your React app right away. This project tries to give you the best setup and has only really needed dependencies installed. So no worries about configuration, it's all done!

Continuous integration and continuous deployments are configured as [github workflow](.github/workflows/s3-upload.yml). The CD pipeline compiles and deploys the React app to an AWS S3 bucket triggered on every commit and merge to master.

**Features**

- [x] Everything builds on top of latest [React](https://github.com/facebook/react) and [webpack](https://github.com/webpack/webpack)
- [x] Local development with hot reloading using [webpack dev server](https://github.com/webpack/webpack-dev-server)
- [x] Linting and code formatting on the fly with [ESLint](https://github.com/eslint/eslint) and [prettier](https://github.com/prettier/prettier)
- [x] Pre-configured test environment for component and snapshot tests using [Jest](https://github.com/facebook/jest)
- [x] Component styling with [Less](https://github.com/less/less.js)
- [x] [Docker](https://github.com/docker) to go! Build a production ready image including [Nginx](https://github.com/nginx/nginx)
- [x] Continuous integration and automatic deployment to AWS S3 with [Github actions](https://help.github.com/en/actions)

**Demo**  
https://d2lk6w0egm4dxt.cloudfront.net/

**Table of contents**

- [:seedling: Seed project for React and webpack](#seedling-seed-project-for-react-and-webpack)
  - [Getting started](#getting-started)
  - [Linting and formatting](#linting-and-formatting)
  - [Testing](#testing)
    - [Snapshot testing](#snapshot-testing)
    - [Unit (DOM) Testing](#unit-dom-testing)
    - [Notes](#notes)
  - [Docker build with Nginx](#docker-build-with-nginx)
  - [Github workflow with AWS S3](#github-workflow-with-aws-s3)
    - [AWS S3 IAM policy](#aws-s3-iam-policy)

## Getting started

```bash
# clone repo
git clone git@github.com:raoulus/react-to-go.git

# install dependencies
npm i

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

When using [Visual Studio Code](https://github.com/microsoft/vscode) the workspace will be automatically configured by `.vscode/settings.json`.

_settings.json_

```json
{
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true,
    "source.fixAll.tslint": true
  },
  "editor.formatOnSave": true,
  "eslint.enable": true,
  "eslint.validate": ["javascriptreact"],
  "javascript.format.enable": false,
  "javascript.validate.enable": false
}
```

## Testing

This project uses [Jest](https://jestjs.io/) and supports Unit (DOM) Testing as well as [Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing).

**Base Dependencies**

- `jest`
- `babel-jest`
- `@babel/preset-env`
- `@babel/preset-react`
- `eslint-plugin-jest`

```bash
# run all tests with jest
npm test

# run all tests in watch mode
npm test:watch
```

### Snapshot testing

> Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
> _https://jestjs.io/docs/en/snapshot-testing_

**Dependencies**

- [`react-test-renderer`](https://reactjs.org/docs/test-renderer.html)

Snapshots are taken and compared with the previous version every time when the tests are executed.

Here's a step by step guide how to create and update snapshot tests.

1. Write a new snapshot test, e.g. [`/components/Footer/__tests__/Footer.spec.js`](app/components/Footer/__tests__/Footer.spec.js)

```javascript
import React from 'react'
import Footer from '../index.jsx'
import renderer from 'react-test-renderer'
describe('<Footer /> ', () => {
  test('matches snapshot', () => {
    const component = renderer.create(<Footer />)
    let tree = component.toJSON()
    expect(tree).toMatchInlineSnapshot()
  })
})
```

2. Run initial test (`npm test`) to replace `.toMatchInlineSnapshot()` with the actual content

```javascript
test('matches snapshot', () => {
    const component = renderer.create(<Footer />)
    let tree = component.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div>
        <p>
          <i
            className="fab fa-github"
          />

          <a
            href="https://github.com/raoulus/react-to-go/"
          >
            react-to-go (v
            )
          </a>
        </p>
      </div>
    `)
  })
})
```

In addition to the actual test the snapshot content must be maintained separately. Meaning every time the content of a component changes then the snapshot needs to be updated as well.

3. Change content
4. Run tests again `npm test`
5. Snapshot tests will fail and needs to be updated with `npm test -- --updateSnapshot`

```bash
Snapshot Summary
 › 2 snapshots failed from 1 test suite. Inspect your code changes or run `npm test -- -u` to update them.
```

6. Update snapshot `npm test -- -u`
7. Commit changes

### Unit (DOM) Testing

This projects follows the [recommendation](https://jestjs.io/docs/en/tutorial-react#dom-testing) from Jest to use `react-testing-library` for Unit Testing also known as DOM Testing.

> The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.  
> _https://testing-library.com/docs/react-testing-library/intro_

**Dependencies**

- `@testing-library/react`
- [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) (custom Jest matchers)
- `eslint-plugin-jest-dom`

### Notes

- Jest will set `process.env.NODE_ENV` to `'test'` if it's not set to something else
- Styles (`less`|`css`) are mocked, see [`__mocks__/style.mock.js`](__mocks__/style.mock.js)

## Docker build with Nginx

There's a npm command to build docker image using [Nginx](https://hub.docker.com/_/nginx).

```bash
# build image with tag react-to-go:1.0.0
npm run build:docker

# start image
docker run --name react-to-go --rm -p 3000:80 react-to-go:1.0.0

# go to http://localhost:3000
```

## Github workflow with AWS S3

You find the working github workflow under [.github/workflows/s3-upload.yml](.github/workflows/s3-upload.yml). This workflow contains two jobs namely `build` and `deploy`.

`build`  
The job runs `npm run build` and outputs static assets under `/public`. To have a clean deployment this folder is saved as artifact for the next job.

`deploy`  
The [`AWS credentials`](https://github.com/aws-actions/configure-aws-credentials) needs to be configured in order to use AWS CLI ([`aws sync`](https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html)) to recursively copy new and updated files to an S3 bucket.

Following secrets have to be created in github (repository -> settings -> secrets)

```bash
AWS_ACCESS_KEY_ID=xxx
AWS_SECRET_ACCESS_KEY=xxx
AWS_REGION=eu-central-1
AWS_S3_BUCKET=react-to-go
```

`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` can be found in AWS under IAM -> Users -> security credentials.

### AWS S3 IAM policy

The access rights for the API user should be restricted for security reasons. Create an IAM policy with the following configuration. This policy can then be attached to a group to which a user belongs.

These permissions are needed to perform [`aws sync`](https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:ListBucket",
        "s3:DeleteObject",
        "s3:GetBucketLocation"
      ],
      "Resource": ["arn:aws:s3:::react-to-go", "arn:aws:s3:::react-to-go/*"]
    }
  ]
}
```
