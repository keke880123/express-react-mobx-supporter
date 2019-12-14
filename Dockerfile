# FROM node:latest
# WORKDIR /software/express-server

# #Adding relevant folders to image
# ADD dist /software/express-server/dist
# ADD node_modules /software/express-server/dist/node_modules

# WORKDIR /software/express-server/dist

# CMD ["node", "server.js"]

# MAINTAINER tomyitav@gmail.com

# 테스트중
# base image
FROM mhart/alpine-node:latest

# nodemon 설치 / 이건 패스
RUN yarn global add nodemon

# 여기서 왼쪽은 호스트 파일의 경로, 오른쪽은 컨테이너의 파일 경로가 된다.
COPY ./package.json /tmp/package.json

# 모듈 인스톨
RUN cd /tmp && yarn install

# 프로젝트 코드가 위치할 app 폴더를 만들고 node_modules를 복사해줍니다.
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

# WORKDIR 은 경로를 설정한 경로로 고정시켜줍니다.
# Dockerfile 의 모든 명령어는 기본적으로 / (루트) 디렉토리에서 실행되므로 상당히 유용하게 쓸수 있다.
WORKDIR /usr/src/app

# es6 를 사용하기 위한 babel 설정 파일
COPY ./.babelrc /usr/src/app

# package.json 을 프로젝트 디렉토리로 복사
COPY ./package.json /usr/src/app

# src 폴더 아래의 코드를 복사해준다.
COPY ./dist/ /usr/src/app/dist

# CMD 는 명령어를 배열 형태로 배치해야하며
# 실제로 앱을 실행시키는 커맨드가 들어간다.
CMD ["yarn", "serve"]

# Dockerfile 의 각 줄은 경로를 공유하지 않는다.
# WORKDIR 을 사용하면 경로를 고정할 수 있다.
# 왼쪽은 호스트 머신의 파일 경로, 오른쪽은 컨테이너 파일 경로

# docker build . -t server 
# -t 플래그는 이미지의 이름을 지정해준다.

# docker run --rm \ # 컨테이너를 한 번 실행시키고 삭제한다.
# --name server \ # 컨테이너의 이름을 지정
# -p 5000:5000 \ # 3030 포트로 접근할 수 있게 포워딩
# server # 이미지 명



