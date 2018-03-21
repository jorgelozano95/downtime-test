# Use an official node runtime as a parent image
FROM node:9.8.0-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World
ENV PORT=80

# Run app.py when the container launches
CMD [ "npm", "start" ]
