
## Prerequisites

- Install [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- Install [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- Ensure you have a Node.js application to deploy

## Minikube status

`minikube status`

If any of the submodules are stopped, then run the following command:

## Start Minikube

`minikube start`

## Apply deployment

`kubectl apply -f deployment.yml`

## Apply loadbalancer service

`kubectl apply -f services.yml`

## Check the URL the app is running on

`minikube service nodeapp-service`

## Resource

[Deploying Node.js Application In Kubernetes](https://www.youtube.com/watch?v=CfPRbdT-wXo&list=PLbsAVgy_YPidb9-1eYk9JbhR9ybkkf6WX&index=13)