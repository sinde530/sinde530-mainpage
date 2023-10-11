# ARM 아키텍처를 위한 Node.js 이미지 사용
FROM node:16-slim AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

FROM node:16-slim

WORKDIR /app

# 의존성과 빌드 결과 복사
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./
COPY --from=build /app/yarn.lock ./
COPY --from=build /app/dist ./dist
COPY . .

CMD ["yarn", "dev"]

EXPOSE 3011
