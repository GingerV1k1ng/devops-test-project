FROM ubuntu
ARG SECRET_PORT
RUN apt-get update
RUN apt-get install nginx -y
COPY index.html /var/www/html/
EXPOSE ${SECRET_PORT}
CMD ["nginx","-g","daemon off;"]
