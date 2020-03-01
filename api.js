const { WebClient } = require('@slack/web-api');
// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(process.env.TOKEN);
// The current date
const currentTime = new Date().toTimeString();

(async () => {

  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: '#quiz-test',
      text: `The current time is ${currentTime}`,
      icon_emoji: ':ponder:'
    });
  } catch (error) {
    console.log(error);
  }

  console.log('Message posted!');
})();