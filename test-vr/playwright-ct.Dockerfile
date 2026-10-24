# Use the official Playwright image which includes browsers and dependencies
FROM mcr.microsoft.com/playwright:v1.62.1-jammy

# Set the working directory inside the container
WORKDIR /recharts

# Copy package.json and lock files first to leverage Docker layer caching
COPY package.json package-lock.json* ./
RUN mkdir -p /recharts/www
COPY www/package.json www/package-lock.json* /recharts/www/

# Install exactly the versions in package-lock.json, the same as CI does.
# The base image already contains the browsers for this Playwright version
# (check-playwright-versions keeps the two in sync), so there is no `playwright install` step.
RUN npm ci

# Copy the rest of your project source code, except node_modules and other unnecessary files defined in .dockerignore
# The dockerfile is in test-vr folder but the docker-compose file is in the root folder
# so this will copy the files from the root folder.
COPY . .

ENV PATH=/recharts/test-vr/.bin:$PATH

EXPOSE 3100
EXPOSE 9323
