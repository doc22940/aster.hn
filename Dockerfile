FROM node:14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Installing dependencies
COPY package.json /usr/src/app/
RUN yarn install

# Copying source files
COPY . /usr/src/app

# Building app
EXPOSE 5000

# Running the app
CMD "yarn" "start"