# node-kubernetes
This is a microservice written with Nodejs. A docker image was created from the service and was deployed to kubernetes cluster using a kubernetes manifest
# Description 
The service has a single endpoint ('/') that returns the current time and time and date, the ip address of the vistor, ersion of the engine running, and name of the host whenever a get request is made. The technology in building the project includes
* Docker
* Kubernetes
* Node v16.13.2
* Expressjs

# Docker
Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. Click https://www.docker.com/ to read more about docker.
# Kubernetes 
Kubernetes is an open-source container orchestration system for automating software deployment, scaling, and management. Click https://kubernetes.io/docs/home/ to read more.
# ExpressJs
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Click https://expressjs.com/ to know more
# NodeJs
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Click https://nodejs.org/ for further reading
# How to Install and Run the Project
You can run the project by either 
* Pulling the image from docker hub
The image is public so you can the pull the image from docker hub using the command "docker pull oladimejisulaiman/node-devops:latest". Once pulling is successful, use the command "docker run oladimejisulaiman/node-devops:latest" to run the container. After the run command, you will see "Listening to port http://localhost:3000". Click on the url and receive a json response similar to 
```json
{
    "status": "success",
    "data": {
        "timestamp": "2022-03-25T23:54:48.054Z",
        "hostname": "oladimejis-MacBook-Pro.local",
        "visitor ip": "::1",
        "engine": "v16.13.2"
    }
}

```
# or clone the repository to your system and 
1. Download and install latest version of Nodejs at https://nodejs.org/en/
2. Clone the project 
3. Install dependencies with "npm install" command
4. Run project with "npm start"

# Routes
| HTTP Method  | Endpoints | 
| ------------- | ------------- |
| GET  | / |
