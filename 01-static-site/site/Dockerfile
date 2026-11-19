#use official lightweight Nginx image
FROM nginx:alpine

#copy webiste files into Nginx web directory
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js

#Nginx listens on port 80
EXPOSE 80