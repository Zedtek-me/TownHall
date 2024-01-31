FROM node:18
WORKDIR /frontend
COPY ./frontend /frontend/
COPY ./frontend/package.json /frontend/package.json
COPY ./frontend/package-lock.json /frontend/package-lock.json
RUN npm install
ENTRYPOINT [ "npm", "run", "build" ]

