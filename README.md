# Command Generator

[The Command Generator](https://sourcegraph.github.io/support-generator/) is a simple web app that can be used to generate the most frequently used commands for different deployment type when running Sourcegraph.

## Features
- Generate commands based on selected deployment type, currently supports Docker, Docker Compose, K8s
- Add/update namespace for K8s commands
- Add/update name of pod for K8s commands
- Add/update name of container for Docker commands
- WIP: sharable links


## Add Commands

You may add more commands to the Command Generator by modifying our [commands.JSON file](https://github.com/sourcegraph/support-generator/blob/master/src/utils/commands.json), and following the format below:

1. Find the appropriate section for the new command addition, or create one if it does not exist. For example, if it's a Kubernetes command, find where the code starts at `"Kubernetes":`
2. Add Json in the format of the following example:

```
        "My new command": {     // REQUIRED: short name for the command
            "command": "deployment do something",     // REQUIRED: the beginning part of the command
            "option": "$SOME_COMMAND_VARIABLE",     // REQUIRED: Add either a command variable like $POD or $CONTAINER or "" for null
            "command2": "the rest of the command",     // OPTIONAL: Add this if there is more to the command after the option variable
            "description": "Get the logs/pods or something from a container." // REQUIRED: Short description of what the command does
        },
```
3. Visually confirm and test edits by running locally in Development.

## Development

In the project directory, you can run:

1. Runs the app in the development mode using `npm install && npm run start`
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
1. App will reload if you make edits. You will also see any lint errors in the console.

## Deployment
1. Runs `npm run deploy` to deploy.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
