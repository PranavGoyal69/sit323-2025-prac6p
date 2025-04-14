# Node.js Application with Kubernetes Deployment

![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

A Node.js application containerized with Docker and deployed on Kubernetes cluster.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Kubernetes Deployment](#kubernetes-deployment)
- [Accessing the Application](#accessing-the-application)
- [Troubleshooting](#troubleshooting)
- [Cleanup](#cleanup)

## Features
- Containerized Node.js application
- Kubernetes deployment configuration
- LoadBalancer service for external access
- Health checks and readiness probes
- Scalable architecture

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/) (for local cluster)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Node.js](https://nodejs.org/) (for local development)

## Installation

1. Clone the repository:

git clone https://github.com/PranavGoyal69/sit323-2025-prac6p.git
cd sit323-2025-prac6p
Install dependencies:


npm install
Kubernetes Deployment
1. Start Minikube cluster
minikube start
2. Build Docker image

eval $(minikube docker-env)
docker build -t node-app .
3. Apply Kubernetes configurations

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
4. Verify deployment

kubectl get pods
kubectl get deployments
kubectl get services
Accessing the Application
Get the application URL:


minikube service node-app-service --url
Or use port-forwarding:


kubectl port-forward svc/node-app-service 8080:80
Then access: http://localhost:8080

Troubleshooting
View application logs

kubectl logs -f <pod-name>
Check service details

kubectl describe service node-app-service
Restart deployment

kubectl rollout restart deployment node-app-deployment
Cleanup
To remove all resources:


kubectl delete -f deployment.yaml -f service.yaml
minikube stop
Repository Structure

/
├── server.js             # Main application file
├── Dockerfile            # Docker configuration
├── deployment.yaml       # Kubernetes deployment
├── service.yaml          # Kubernetes service
├── package.json          # Node.js dependencies
└── README.md             # This file
