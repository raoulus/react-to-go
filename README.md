# :seedling: Seed project for React and webpack

![CI](https://github.com/raoulus/react-to-go/workflows/CI/badge.svg)
![Last commit](https://img.shields.io/github/last-commit/raoulus/react-to-go "Last commit")
![Dependency Tracker](https://img.shields.io/david/dev/raoulus/react-to-go "Dependency Tracker")


Clone this repository and start coding your React app right away. This project tries to give you the best setup and has only really needed dependencies installed. So no worries about configuration, it's all done!

Continuous integration and continuous deployments are configured as [github workflow](.github/workflows/s3-upload.yml). The CD pipeline compiles and deploys the React app to an AWS S3 bucket triggered on every commit and merge to master.

**Features**

- [x] React 16.13.1
- [x] Less 3.11.1
- [x] Webpack 4.42.1 and Webpack dev server 3.10.3 including hot reloading
- [x] Babel loader 8.1.0 and Babel core 7.9.0
- [x] ESLint 6.8.0
- [x] prettier 2.0.2
- [x] Docker build using Nginx as production server
- [x] CI/CD Github workflow and AWS S3 upload
- [ ] Unit and component tests

**Demo**   
http://react-to-go.s3-website.eu-central-1.amazonaws.com/

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
            "Resource": [
                "arn:aws:s3:::react-to-go",
                "arn:aws:s3:::react-to-go/*"
            ]
        }
    ]
}
```

