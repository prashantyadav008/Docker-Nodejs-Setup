<!-- @format -->

# Install Docker and Docker Compose

## Install the latest version of Docker and Docker Compose (for running the Fabric network):

    sudo apt-get -y install docker-compose

• Make sure the Docker Daemon is running:

    sudo systemctl start docker

**or (Restart Docker)**

    sudo systemctl restart docker

• **Optional:** If you want the Docker daemon to start when the system starts, use the following:

    sudo systemctl enable docker

• Add your user to the Docker group:

    sudo usermod -a -G docker <username: itsprashant>

• Referesh the Group Permission in Current Shell Session

    newgrp docker

<br><hr><br>

# Run Basic "Hello World" Program in Docker Container to Check Docker working or not

1.  Pull Created Docker Container & Image and Run

        docker run hello-world

2.  Check All Docker Containers Status

        docker ps -a

3.  Check All Docker Image Status

        docker images

4.  Remove All Docker Containers and Image

    <table border="1" cellpadding="0" cellspacing="0" style="width:100%" >
    <thead>
    <tr>
    <td>Command</td>
    <td>Purpose</td>
    <td>Scope</td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><b>docker system prune -a</b></td>
    <td>Remove Unused containers, images, networks, and build cache.</td>
    <td>Clean All doer.</td>
    </tr>
    <tr>
    <td><b>docker volume prune</b></td>
    <td>Remove Unused Docker volumes.</td>
    <td>Only unused volumes</td>
    </tr>
    <tr>
    <td><b>docker network prune</b></td>
    <td>Remove Unused Docker networks.</td>
    <td>Only unused networks</td>
    <tr>
    <tr>
    <td><b>docker rm  <b>container_id</b></td>
    <td>Remove used and unused Container one by one using their container_id</td>
    <td></td>
    </tr>
    <tr>
    <td><b>docker rmi <b>image_id</b></td>
    <td>After Stop or Remove Container, Remove used and unused Image one by one using their image_id</td>
    <td></td>
    </tr>
    <tr>
    <td><b>docker --version</b></td> 
    <td>Ensure Docker are installed and running.</td>
    <td></td>
    </tr>
    <tr>
    <td><b>docker-compose --version</b></td>
    <td>Ensure Docker Compose are installed and running.</td>
    <td></td>
    </tr>
    </tbody>
    </table>

<br><br><hr><br><br>

# Docker Commands Cheat Sheet

## IMAGES

### List all local images

    docker images

### Delete an image

    docker rmi <image_name>

### Remove unused images

    docker image prune

### Build an image from a Dockerfile

    docker build -t <image_name>:<version> . # version is optional

### Build without cache

    docker build -t <image_name>:<version> . --no-cache

---

## CONTAINERS

### List all local containers (running & stopped)

    docker ps -a

### List all running containers

    docker ps

### Create & run a new container

    docker run <image_name>

_If image is not available locally, it will be downloaded from DockerHub._

### Run container in background

    docker run -d <image_name>

### Run container with custom name

    docker run --name <container_name> <image_name>

### Port binding in container

    docker run -p <host_port>:<container_port> <image_name>

### Set environment variables in a container

    docker run -e <var_name>=<var_value> <container_name>

### Start or stop an existing container

    docker start <container_name>

docker stop <container_name>

### Inspect a running container

    docker inspect <container_name>

### Delete a container

    docker rm <container_name>

---

## TROUBLESHOOTING

### Fetch logs of a container

    docker logs <container_name>

### Open shell inside running container

    docker exec -it <container_name> /bin/bash

# or

docker exec -it <container_name> sh

---

## DOCKER HUB

### Pull an image from DockerHub

    docker pull <image_name>

### Publish an image to DockerHub

    docker push <username>/<image_name>

### Login into DockerHub

    docker login -u <username>

# or

docker login

_To logout:_

    docker logout

### Search for an image on DockerHub

    docker search <image_name>

---

## VOLUMES

### List all volumes

    docker volume ls

### Create new named volume

    docker volume create <volume_name>

### Delete a named volume

    docker volume rm <volume_name>

### Mount named volume with running container

    docker run --volume <volume_name>:<mount_path>

_or using --mount:_

    docker run --mount type=volume,src=<volume_name>,dest=<mount_path>

### Mount anonymous volume with running container

    docker run --volume <mount_path>

### Create a bind mount

    docker run --volume <host_path>:<container_path>

_or using --mount:_

    docker run --mount type=bind,src=<host_path>,dest=<container_path>

### Remove unused local volumes

    docker volume prune

---

## NETWORKS

### List all networks

    docker network ls

### Create a network

    docker network create <network_name>

### Remove a network

    docker network rm <network_name>

### Remove all unused networks

    docker network prune

<br><hr><br>

# Hardhat Setup Using Docker

This repository demonstrates, How you can Setup Hardhat Environment Using Docker

## Check out the Hardhat Setup Using Docker

[GitHub Repository Link](https://github.com/prashantyadav008/Docker-Hardhat-Setup)
