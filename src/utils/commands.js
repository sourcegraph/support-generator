export const commands = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "github.schema.json#",
    "title": "List of Commands",
    "description": "A list of frequently-used commands for each Sourcegraph deployment type.",
    "allowComments": true,
    "type": "object",
    "additionalProperties": false,
    "Docker": {
        "Function": {
            "value": "Function",
            "command": "[CHOOSE FUNCTION]",
            "description": "Default option"
        },
        "Get Logs": {
            "value": "Get Logs",
            "command": "docker logs ",
            "option": "$CONTAINER",
            "description": "Get the logs of a container."
        },
        "List Containers": {
            "value": "List Containers",
            "command": "docker ps -a ",
            "description": "Get a list of containers."
        },
        "Install/Run Sourcegraph": {
            "value": "Insall/Run Sourcegraph",
            "command": "docker run -d --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm --volume ~/.sourcegraph/config:/etc/sourcegraph --volume ~/.sourcegraph/data:/var/opt/sourcegraph sourcegraph/server:",
            "option": "$VERSION",
            "description": "The docker run command first creates a writeable container layer over the specified image, and then starts it using the specified command."
        },
        "Upgrade Sourcegraph": {
            "value": "Upgrade Sourcegraph",
            "command": "docker run -d --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm --volume ~/.sourcegraph/config:/etc/sourcegraph --volume ~/.sourcegraph/data:/var/opt/sourcegraph sourcegraph/server:",
            "option": "$VERSION",
            "description": "All you need to do to upgrade Sourcegraph is to restart your Docker server with a new image tag."
        },
        "Run Bash Shell": {
            "value": "Run Bash Shell",
            "command": "docker exec -it ",
            "option": "$CONTAINER",
            "command2": " bash",
            "description": "This allows you to execute an interactive bash shell on a running container."
        },
        "Kill Container": {
            "value": "Kill Container",
            "command": "docker kill ",
            "option": "$CONTAINER",
            "description": "Kill one or more containers."
        },
        "Restart Container": {
            "value": "Restart Container",
            "command": "docker restart ",
            "option": "$CONTAINER",
            "description": "Restart one or more containers."
        },
        "Run Interactive Shell": {
            "value": "Run Interactive Shell",
            "command": "docker exec -it ",
            "option": "$CONTAINER",
            "command2": " shell",
            "description": "This allows you to execute an interactive shell on a running container."
        }
    },
    "Docker Compose": {
        "Function": {
            "value": "Function",
            "command": "[CHOOSE FUNCTION]",
            "description": "Default option"
        },
        "Get Logs": {
            "command": "docker-compose logs ",
            "option": "$CONTAINER",
            "description": "Get the logs of a container."
        },
        "List Containers": {
            "command": "docker-compose ps -a",
            "description": "Get a list of containers."
        },
         "Kill Containers": {
            "command": "docker-compose kill",
            "description": "Get a list of containers."
        },
        "Install/Run Sourcegraph": {
            "command": "docker-compose up -d",
            "description": "Builds, (re)creates, starts, and attaches to containers for Sourcegraph. `-d` flag starts the container in the detached mode where the container runs in the background."
        },
        "Shutdown Sourcegraph": {
            "command": "docker-compose down",
            "description": "Stops containers and removes containers, networks, volumes, and images created by docker up."
        },
        "Run Bash Shell": {
            "command": "docker-compose exec -it ",
            "option": "$CONTAINER",
            "command2": " bash",
            "description": "This allows you to execute an interactive bash shell on a running container."
        },
        "Run Interative Shell": {
            "command": "docker-compose exec -it ",
            "option": "$CONTAINER",
            "command2": " shell",
            "description": "This allows you to execute an interactive shell on a running container."
        }
    },
    "Kubernetes": {
        "Function": {
            "value": "Function",
            "command": "[CHOOSE FUNCTION]",
            "description": "Default option"
        },
        "Get Logs": {
            "command": "kubectl logs -f ",
            "option": "$POD",
            "description": "Get the logs of a specified pod."
        },
        "List Pods": {
            "command": "kubectl get pods -A ",
            "description": "Get a list of pods within the cluster and their health status."
        },
        "Describe Pod": {
            "command": "kubectl describe ",
            "option": "$POD",
            "description": "Display detailed information about the status of a single pod"
        },
        "Restart Sourcegraph": {
            "command": "kubectl rollout restart deployment/sourcegraph-frontend -n prod ",
            "option": "$POD",
            "description": "Restart Sourcegraph Instance by restarting the frontend pod."
        },
        "Get Events": {
            "command": "kubectl get events ",
            "description": "List all events in the cluster’s history."
        },
        "Delete a Pod": {
            "command": "kubectl delete pod ",
            "option": "$POD",
            "description": "Delete a failing pod so that it will get recreated, possibly on a different node."
        },
        "List Persistent Volume Claims (PVCs)": {
            "command": "kubectl get pvc",
            "description": "List all Persistent Volume Claims (PVCs) and their statuses."
        },
        "List Persistent Volumes (PVs)": {
            "command": "kubectl get pv",
            "description": "List all Persistent Volumes (PVs) that have been provisioned."
        },
        "Port Forward Sourcegraph": {
            "command": "kubectl port-forward svc/sourcegraph-frontend 3080:30080",
            "description": "This allows you to access your deployed Sourcegraph instance locally."
        },
        "Run Interative Shell": {
            "command": "kubectl exec -it ",
            "option": "$POD",
            "command2": " sh",
            "description": "This allows you to execute an interactive shell on a Pod."
        },
        "Check Dirty Database": {
            "command": "kubectl exec ",
            "option": "$PGSQL_POD",
            "command2": " -- psql -U sg -c 'SELECT * FROM schema_migrations'",
            "description": "Get inside the PGSQL Pod to check for dirty database."
        }
    }
}