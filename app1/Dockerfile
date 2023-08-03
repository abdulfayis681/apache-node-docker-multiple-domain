# Use an official Node.js base image
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port on which the Node.js app is running
EXPOSE 3001

# Start the Node.js app
CMD [ "npm", "start" ]
