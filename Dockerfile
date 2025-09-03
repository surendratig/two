FROM nginx
MAINTAINER name surendra
LABEL this image for nginx webserver
COPY index.html /usr/share/nginx/html
