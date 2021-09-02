
FROM node:10.15.3 as build-step

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD npm run start
# FROM gaming-docker-maxsys.docker.tattsgroup.com/maxsys2/node14:2.0.1

# Install the application under /opt/maxsys/app/
#COPY node_modules /opt/maxsys/app/node_modules
#COPY dist-server /opt/maxsys/app/dist-server
#COPY dist-client /opt/maxsys/app/dist-client
#COPY contract /opt/maxsys/app/contract
#COPY config /opt/maxsys/app/config
#COPY package.json /opt/maxsys/app

# Run the app
#EXPOSE  10010
#WORKDIR /opt/maxsys/app
#CMD ["node", "dist-server/index"]
