# Use the official Node.js 14 base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the producer application code
COPY producer.js ./

ENV CONSUMER_URL="http://consumer:80"

# Run the producer application
CMD [ "node", "producer.js" ]
