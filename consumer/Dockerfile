# Use the official Node.js 14 base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the producer application code
COPY consumer.js ./

ENV LISTENING_PORT=80 \
    PGHOST=db \
    PGPORT=5432 \
    PGUSER=devopsChallenge \
    PGDATABASE=devopsChallengeDatabase \
    PGPASSWORD=superSecurePassword \
    PGSSLMODE=disable

# Run the producer application
CMD [ "node", "consumer.js" ]
