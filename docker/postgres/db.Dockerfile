FROM postgres:14
COPY init.sql /docker-entrypoint-initdb.d/
