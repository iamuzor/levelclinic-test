FROM public.ecr.aws/lambda/nodejs:16

COPY . .

RUN npm install
RUN npm run build