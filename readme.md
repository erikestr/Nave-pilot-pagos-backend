# Nave Pilot Stripe Payments

This project was created to use an idependet Stripe API service on Nave Pilot to provide subscription service.
The project was created on Spring Boot 2.6.4 with Java 11.
## Build

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
mvn package
```

## Create Docker image

```bash
docker build -t docker_username/image_name:image_version .
```
important: make sure that you've a point (.) at final command.

## Run Docker imag

```bash
docker run -p 8080:7011 --env SPRING_PROFILES_ACTIVE=docker docker_username/image_name:image_version
```

## Run postgres
```
sudo docker run --name [container_name] -d -p [custom_port]:5432 -e POSTGRES_PASSWORD=[custom_password] postgres
```

## Execute psql
```
sudo docker exec -it [container_name] psql -U [postgres_user]
```

## Start/Stop postgres
```
sudo systemctl [start/stop] postgresql
```
