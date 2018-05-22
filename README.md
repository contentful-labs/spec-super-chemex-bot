Super Chemex Bot ☕️🤖
=====================

Our friendly bot-overlord notifying people when there is freshly brewed coffee in the kitchen. You can read the story of how this bot came be on [our blog](https://www.contentful.com/blog/2017/09/27/super-chemex-bot/).

Super Chemex Bot is a Slack app that posts a message in channel when an AWS IoT button is pressed.

This is a simplified version for Slack Spec and does not support multiple floors. If you want the full version check out the [main repository](https://github.com/contentful-labs/super-chemex-bot).

Setup
=====

Super Chemex Bot is only a small piece of code but requires a bit of configuration to get running. Follow these steps to get it set up.

 * Clone this repository
 * `cd` into the `lambda` directory and run `npm install` (or `yarn install`).
 * First Create a Slack app
  * Go to the Slack [app wizard](https://api.slack.com/apps?new_app=1). Give your app a name and select a workspace.
  * Give the app the scope `chat:write:bot`
  * Install the app [to your team](https://api.slack.com/slack-apps#installing_apps).
 * Time to set up the button
   * Configure your button by following the [AWS tutorial](http://docs.aws.amazon.com/iot/latest/developerguide/configure-iot.html)
   * Choose to create an AWS Lambda function that is triggered by your button
   * Add four environment variables to the Lambda function: `SLACK_API_TOKEN`, `CONTENTFUL_ACCESS_TOKEN`, `CONTENTFUL_SPACE_ID`, `SLACK_CHANNEL`
    * For `CONTENTFUL_SPACE_ID` use `zsfvbjpz370n`
    * For `CONTENTFUL_ACCESS_TOKEN` use `818d5407df70dce9750c9f6b0e5dbaa501357998783b51e8d5a8891b2345ea8a`
   * [Install](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) and [configure](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration) the AWS cli.
   * Navigate to the project root folder and run `./deploy.sh <function-name>`
 * Press the button to see a message appear. 🎉

Bonus step:

If you want to modify the messages, sign up for Contentful if you haven't already.
 * Follow the [instructions](https://www.contentful.com/r/knowledgebase/personal-access-tokens/#how-to-get-a-personal-access-token-the-web-app) to create a personal access token
 * Execute `./setup-space.js --management-token <your-personal-access-token>`
 * Create an API key for your new space
 * Switch out the values `CONTENTFUL_ACCESS_TOKEN` and `CONTENTFUL_SPACE_ID` environments variables with your new credentials.

License
=======

Copyright (c) 2017-2018 Contentful GmbH. Code released under the MIT license. See [LICENSE][LICENSE] for further details.
