# Step 1: Build the React application
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start 
CMD ["npm", "start"]