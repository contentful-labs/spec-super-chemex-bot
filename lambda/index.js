'use strict';

const contentful = require('./contentful')
const slack = require('./slack')

const slackChannel = process.env.SLACK_CHANNEL

exports.handler = (event) => {
  contentful.getAll().then(function (messages) {
    const randomMessageIdx = Math.floor(Math.random() * messages.length)
    const {message} = messages[randomMessageIdx]

    return slack.send(slackChannel, message)
  })
  .then(function(res) {
    console.log('Message sent: ', res)
  })
  .catch(function (error) {
    console.error(error);
  })
}
