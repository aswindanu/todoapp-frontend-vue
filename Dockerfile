FROM node:alpine

ARG NODE_OPTIONS=--openssl-legacy-provider

WORKDIR '/app/'

COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
ENTRYPOINT ["npm", "run", "build"]

# RUN ["chmod", "+x", "entrypoint.sh"]
# ENTRYPOINT [ "./entrypoint.sh" ]
# ENTRYPOINT ["tail", "-f", "/dev/null"]
