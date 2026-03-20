# Install node version 22 in the docker container
FROM node:22-alpine 

# Create a directory name app in the container
WORKDIR /app

# Copy all the .json file to the app directory
COPY package*.json ./ 

# Install all the dependencies
RUN npm install

# Copy all the remainig files into the container
COPY . .

EXPOSE 4000

CMD [ "npm" , "start" ]