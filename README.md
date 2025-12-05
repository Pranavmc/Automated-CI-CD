**Automated CI/CD Pipeline for a Dockerized Web Application**
This project demonstrates an end-to-end CI/CD workflow using GitHub, Jenkins, Docker, AWS EC2, and Nginx reverse proxy to achieve continuous integration and continuous delivery of a containerized web application.

**Author**
**Pranav Mallinath Chougale**  
DevOps & Cloud Enthusiast

**Table of Contents**
- Project Overview
- Architecture
- Technologies Used
- Features Implemented
- Project Structure
- Jenkins Pipeline Stages
- Setup Instructions
- Improvements & Future Scope
- Screenshots

**Project Overview**
A sample Node.js web application is containerized using Docker and deployed on an AWS EC2 instance. A Jenkins pipeline automates:
- Code pull from GitHub
- Docker image build
- Container deployment
- Continuous rollout on every commit

**Architecture**
Below is the CI/CD architecture for the deployment:
Developer → Push Code → GitHub Repository
↓ Webhook
Jenkins (on EC2) → Builds Docker Image → Runs Container
↓
End User (Browser)

**Technologies Used**
-Source Code Management-Git, GitHub
-CI/CD Server-Jenkins
-Containerization-Docker
-Cloud Hosting-AWS EC2 (Ubuntu 22.04)
-Language-Node.js

**Features Implemented**
✔ Fully automated CI/CD pipeline  
✔ Docker-based container deployment  
✔ Nginx proxy for production-ready access  
✔ Code commit triggers build & deployment  
✔ Minimal downtime updates  
✔ DevOps best practices for pipelines  

**Project Structure**
Automated-CI-CD/
│
├── app.js
├── Dockerfile
├── Jenkinsfile
├── README.md
└── screenshots

**Jenkins Pipeline Stages**
**Stage**
Build Docker Image-Builds container from Dockerfile
Run Container-Deploys updated container and removes old one

Every new GitHub commit automatically triggers the pipeline.

**Setup & Deployment Instructions (Short Form)**
**1.Clone the repository**
git clone https://github.com/Pranavmc/Automated-CI-CD.git

**2.Build Docker image**
docker build -t ci-app .

**3.Run container**
docker run -d -p 3000:3000 ci-app


**4.Configure Jenkins**
- Connect GitHub Repo
- Enable Pipeline from SCM
- Add Jenkinsfile


**Improvements & Future Scope**
- Push versioned Docker images to Docker Hub
- Add testing stage in pipeline
- Automated rollback capabilities
- SSL certificate (HTTPS)
- Monitoring using Prometheus/Grafana

**Screenshots**
'screenshots/' folder
1. GitHub repository
2. Jenkins build success dashboard
3. EC2 running container (docker ps)
4. Application running in browser using EC2 IP

 **Conclusion**
This project showcases key DevOps workflows including automation, containerization, cloud deployment, and reverse proxy configuration. It is suitable for showcasing professional DevOps project experience.


