'use strict';

const contentful = require('contentful')
const token = process.env.CONTENTFUL_ACCESS_TOKEN
const spaceId = process.env.CONTENTFUL_SPACE_ID

const client = contentful.createClient({
  space: spaceId,
  accessToken: token
})

function getAll () {
  return client.getEntries({limit: 1000}).then(function (entries) {
    return entries.items.reduce(function (acc, entry) {
      acc[entry.sys.contentType.sys.id].push(entry)
      return acc
    }, {message: [], configuration: []})
  }).then(function (config) {
    return config.message.map(entry => {
      return {
        message: entry.fields.message
      }
    })
  })
}

module.exports = {
  getAll
}
