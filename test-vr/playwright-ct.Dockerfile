# Use the official Playwright image which includes browsers and dependencies
FROM mcr.microsoft.com/playwright:v1.55.1-jammy

# Set the working directory inside the container
WORKDIR /recharts

# Copy package.json and lock files first to leverage Docker layer caching
COPY package.json package-lock.json* ./

# Install project dependencies
RUN npm install

# Install Playwright's browser binaries inside the container. Playwright itself says this should be after npm install.
RUN npx playwright install --with-deps

# Copy the rest of your project source code, except node_modules and other unnecessary files defined in .dockerignore
# The dockerfile is in test-vr folder but the docker-compose file is in the root folder
# so this will copy the files from the root folder.
COPY . .

ENV PATH=/recharts/test-vr/.bin:$PATH

EXPOSE 3000
EXPOSE 9323
