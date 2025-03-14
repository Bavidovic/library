FROM node:22.0.0-slim

# Install build tools for native dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Explicitly install sqlite3
RUN npm install sqlite3 --save

# Copy the rest of the application code
COPY . .

# Create a directory for the database and an empty database.sqlite file
RUN mkdir -p /app/data && touch /app/data/database.sqlite

# Expose the backend port
EXPOSE 3000

# Start the backend
CMD ["npm", "run", "start"]