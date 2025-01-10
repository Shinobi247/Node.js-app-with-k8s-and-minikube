
## Minikube status

`minikube status`
if any of the components are stopped then run the following command

## Start Minikube

`minikube start`

## Apply deployment

`kubectl apply -f deployment.yml`

## Apply loadbalancer service

`kubectl apply -f services.yml`

## Check the URL the app running on

`minikube service nodeapp-service`


## Resource
[Deploying Node.js Application In Kubernetes](https://www.youtube.com/watch?v=CfPRbdT-wXo&list=PLbsAVgy_YPidb9-1eYk9JbhR9ybkkf6WX&index=13)