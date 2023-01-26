# FROM public.ecr.aws/lambda/nodejs:16
FROM node:16

COPY . .

RUN npm install
RUN npm run build