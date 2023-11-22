# FROM node:16.17
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .


# Use the official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 3001

# Start the app
CMD [ "npm", "start" ]