#STATE BASE IMAGE
FROM node:alpine
#copy the whole project file inside the image
COPY . .
#install package and dependencies inside the image
RUN npm install
#give the command that docker will use in starting the image
CMD [ "node","server.js"] 