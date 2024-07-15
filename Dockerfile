FROM mcr.microsoft.com/playwright:focal

# Install node.js and npm
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

# Create a working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Install Playwright
RUN npx playwright install --with-deps

# Command to run tests
CMD ["npx", "playwright", "test"]