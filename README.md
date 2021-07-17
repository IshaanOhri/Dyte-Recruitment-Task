<code>
  <h1 align="center">Dyte Backend Recruitment Task</h1>
  <h3 align="center">ISHAAN OHRI 18BCE0265</h3>
  <h3 align="center">Vellore Institute of Technology, Vellore</h3>
</code>

<div align="center">
  <img src="https://img.shields.io/github/repo-size/IshaanOhri/Dyte-Recruitment-Task?logo=github" hspace="5">
  <img src="https://img.shields.io/github/last-commit/IshaanOhri/Dyte-Recruitment-Task?logo=git">
</div>

<br>

<p align="center">

## Steps to start server

#### 1. Clone repository

```
git clone https://github.com/IshaanOhri/Dyte-Recruitment-Task
```
#### 2. Start with Docker
    
2.1 Using docker-compose command
```
docker-compose up --build -d
```

2.2 Using NPM script
```
npm run dc:up
```
#### 3. Shut down server
    
2.1 Using docker-compose command
```
docker-compose down
```

2.2 Using NPM script
```
npm run dc:down
```
    
## Postman Documentation
Use the below postman documentation to view all the routes
```
https://documenter.getpostman.com/view/8634962/TzmCgYQS
```
    
## About the project
 - The project uses a 2 Level package.json architecture. The outer level takes care of eslint, prettier and husky. Inside there are two directories, one for the **Express Backend** and another for the **Webook Moleculer Microservice**, which have their independent NPM files.
 - Both the directories have independent Dockerfiles and a docker-compose.yml file located in the outer directory takes care of spinning the containers.
 - In total 4 containers are spun:
    1. Express Backend
    2. Webook Moleculer Microservice
    3. MongoDB
    4. MongoUI (Access at *http://localhost:8001/*)
 - The batch processing in the **trigger** action is done using **Promise Pools**, with a concurrency of 10.
    
## Author

- [Ishaan Ohri 18BCE0265](https://github.com/IshaanOhri)

## Tech Stacks / Tools used

<p>
  <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/nodejs.png" height=40 hspace=20>
  <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/mongodb.png" height=40 hspace=20>
  <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/typescript.png" height=40 hspace=20>
  <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/javascript.png" height=40 hspace=20>
</p>

<br>

<p align="center">
  <a href="https://www.linkedin.com/in/ishaanohri/">
    <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/linkedin.png" width="30" height="30" hspace="20">
  </a>

  <a href="mailto:ishaan99ohri@gmail.com">
    <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/mail.png" width="30" height="30" hspace="20">
  </a>

  <a href="https://stackoverflow.com/users/11712463/ishaan-ohri">
    <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/stackoverflow.png" width="30" height="30" hspace="20">
  </a>

  <a href="https://www.instagram.com/ohri_8/">
    <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/instagram.png" width="30" height="30" hspace="20">
  </a>

  <a href="https://github.com/IshaanOhri">
    <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/github.png" width="30" height="30" hspace="20">
  </a>
</p>
