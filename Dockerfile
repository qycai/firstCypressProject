FROM cypress/browsers:node12.16.2-chrome81-ff75

#RUN apk add --update nodejs nodejs-npm
#RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
#RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install

WORKDIR /usr/uitest
COPY cypress /usr/uitest
#RUN npm install

#EXPOSE 8088
CMD ["npm","run","cypress:open"]
CMD ["npm","run","weiboSignUpTest"]
