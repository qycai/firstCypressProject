FROM cypress/browsers:node12.16.2-chrome81-ff75

WORKDIR /usr/uitest
COPY . /usr/uitest
RUN npm install

CMD ["npm","run","weiboSignUpTest"]
