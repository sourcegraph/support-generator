# Command Generator

[The Command Generator](https://sourcegraph.github.io/support-generator/) is a simple web app that can be used to generate the most frequently used commands for different deployment type when running Sourcegraph.

## Features
- Generate commands based on selected deployment type, currently supports Docker, Docker Compose, K8s
- Add/update namespace for K8s commands
- Add/update name of pod for K8s commands
- Add/update name of container for Docker commands
- WIP: sharable links


## Add Commands

You may add more commands to the Command Generator by modifying our [commands.JSON file](https://github.com/sourcegraph/support-generator/blob/master/src/utils/commands.json).

## Development

In the project directory, you can run:

1. Runs the app in the development mode using `npm install && npm run start`
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
1. App will reload if you make edits. You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
