scp /ruta/archivo/archivo.sql [username]@[ip]:/home
docker cp /home/archivo.sql [CONTAINER_NAME]:/home/
docker exec -it [CONTAINER_NAME] /bin/bash
psql -U postgres
CREATE DATABASE nave;
CREATE USER postgresnave WITH ENCRYPTED PASSWORD 'postgresnave';
GRANT ALL PRIVILEGES ON DATABASE nave TO postgresnave;
\l
\q
psql -d nave -U postgres -f /home/archivo.sql