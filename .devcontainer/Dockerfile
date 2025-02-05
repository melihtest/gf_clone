FROM node:20-buster

# Install Ubuntu packages
RUN DEBIAN_FRONTEND=nointeractive apt-get update && \
  DEBIAN_FRONTEND=nointeractive apt-get -y install --no-install-recommends \
  curl \
  git \
  sudo \
  ssh