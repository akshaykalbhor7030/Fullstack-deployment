# Build Stage
FROM node:22-alpine as BUILD

# Make a folder name "app" in the container
WORKDIR /app

# copy all the file starting with package and ending with .json extension
COPY package*.json ./

# Install all the dependencies
RUN npm install

# Copy all the remaining files to the /app folder
COPY . .

# Build the project
RUN npm run build 


# production Stage 
FROM node:22-alpine 

# Create a folder in the production container
WORKDIR /app

# Install a library name serve
RUN npm i -g serve
ENV PATH ="/usr/local/bin:$PATH"

# Copy the dist folder from the above build stage into this container
COPY --from=build /app/dist ./dist

# Run the frontend on the following port
EXPOSE 3000

CMD ["serve","-s","dist","-l","3000"]