# Content
- [Commands](#commands)
  * [Build](#build-spring-boot-app)
  * [PATH](#path)
- [Docker](#docker)
  * [Create Docker image](#create-docker-image)
  * [Run Docker imag](#run-docker-imag)
  * [Run postgres](#run-postgres)
  * [Execute psql](#execute-psql)
  * [Start/Stop postgres](#start-stop-postgres)
  * [Docker access to internal shell](#docker-access-to-internal-shell)
  * [Docker Extract file from container](#docker-extract-file-from-container)
- [Docker compose](#docker-compose)
  * [Start](#start)
  * [Stop](#stop)
  * [Down](#down)
  * [Docker push to Docker Hub](#docker-push-to-docker-hub)
  * [Docker access to internal shell](#docker-access-to-internal-shell-1)
  * [Docker Extract file from container](#docker-extract-file-from-container-1)
- [Postgres](#postgres)
  * [Create Database](#create-database)
  * [Create User and give permissions](#create-user-and-give-permissions)
  * [Create Backup Dump](#create-backup-dump)
  * [Run .sql script](#run-sql-script)
- [SSH](#ssh)
  * [SCP](#scp)
    + [Copy file to path - local >>> server](#copy-file-to-path---local--server)
    + [Copy file to path - local <<< server](#copy-file-to-path---server--local)
    + [Copy directory to path - local >>> server](#copy-directory-to-path---local--server)
    + [Copy directory to path - server >>> local](#copy-directory-to-path---server--local)
- [Git](#git)
  * [Uploading Changes](#uploading-changes)
  * [Download Changes Pull](#download-changes-pull)
  * [Push from origin to existent merge](#push-from-origin-to-existent-merge)
  * [Discard changes](#discard-changes)


# Commands
## Build Spring Boot App
```bash
mvn package
```
## Path
```
export PATH="/path/to/add:$PATH"
source ~/.bashrc
```
[*return content*](#content)

# Docker
## Create Docker image

```bash
docker build -t [docker_username]/[image_name]:[image_version] .
```
important: make sure that you've a point (.) at final command.

## Run Docker imag

```bash
docker run -p 8080:7011 --env SPRING_PROFILES_ACTIVE=docker [docker_username]/[image_name]:[image_version]
```

## Run postgres
```
sudo docker run --name [container_name] -d -p [custom_port]:5432 -e POSTGRES_PASSWORD=[custom_password] postgres
```

## Execute psql
```
sudo docker exec -it [container_name] psql -U [postgres_user]
```

## Start Stop postgres
```
sudo systemctl [start/stop] postgresql
```

## Docker access to internal shell
```
docker exec -it [container_name] /bin/bash
```

## Docker Extract file from container
```
docker cp [container_name]:/path/FILE.sql /path/to/copy/
```
[*return content*](#content)

# Docker compose
Compose is a tool for defining and running multi-container Docker applications.
[example](docker-compose/docker-compose.yml)
```
sudo docker-compose -up {-d, background mode}
```

## Start
Starts existing containers for a service.
```
sudo docker-compose stop
```

## Stop
Stops running containers without removing them.
```
sudo docker-compose start
```

## Down
Stops containers and removes containers, networks, volumes, and images created by up.
```
sudo docker-compose down
```

## Docker push to Docker Hub
```
docker login
sudo docker tag [image_id] [docker_username]/[image_name]:[tagname]
sudo docker push [docker_username]/[image_name]:[image_version]
```
[*return content*](#content)

# Postgres
## Create Database
```
CREATE DATABASE [database];
```

## Create User and give permissions
```
CREATE USER [username] WITH ENCRYPTED PASSWORD '[user_password]';
GRANT ALL PRIVILEGES ON DATABASE [database] TO [user_name];
```

## Create Backup Dump
```
pg_dump -U [username] -W -h localhost [database_name] > /path/to/save/FILE.sql
pg_dump -i -h localhost -p 5432 -U postgres -F c -b -v -f "/path/of/file.backup" [database_name]
```

## Run backup script
```
psql -d [database_name] -f FILE.sql
```

## Run backup script
```
```
[*return content*](#content)

# SSH
Connection to remote VPS by SSH.
```
ssh [username]@[ip/domain]
type password...
```

## SCP
Used to manage files on VPS with SSH connection.

### Copy file to path - local >>> server
```
scp archivo.txt [username]@[ip/domain]:/home/...
```

### Copy file to path - server >>> local
```
scp [username]@[ip/domain]:/home/archivo.txt [local/path] 
```

### Copy directory to path - local >>> server
```
scp -r [local/path] [username]@[ip/domain]:/home/.../
```

### Copy directory to path - server >>> local
```
scp -r [username]@[ip/domain]:/home/.../ [local/path] 
```
[*return content*](#content)

# Git

## Uploading Changes
```
git branch [work_branch]
git checkout [work_branch]

git add [./.../.../]
git commit -m "Comment"
...
git add [./.../.../]
git commit -m "Comment"
...

git push origin test
```

## Download Changes Pull
```
git pull origin [qa_branch]
```

## Push from origin to existent merge
```
git push origin [work_branch]
```

## Discard changes
```
git checkout -- .
```
[*return content*](#content)


docker exec -it [CONTAINER_NAME] /bin/bash

pg_dump -U [USERNAME] -W -h localhost [DATABASE_NAVE] > /path/to/save/FILE.sql

docker cp [CONTAINER_NAME]:/path/FILE.sql /path/to/copy/

scp erikes@208.109.39.83:/path/FILE.sql /path/to/copy/local/

psql -d [DATABASE_NAME] -f FILE.sql
