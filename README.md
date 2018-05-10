# FB-Messenger-Bot
Facebook Messenger Auto Responder
Using this bot you can make an auto responder for your Facebook Messenger (for example, you could use this for your out of office messages).

## How to use this bot ##

1. Run `git clone git@github.com:matthijsotterloo/FB-Messenger-Bot.git`
2. Install the node modules using `npm install`

3. Open `index.js` and change the login details + set your message.
4. Now run `node index.js` to start your bot

You're now good to go!

TIP: Run this on your server using screen, this is a tool to keep your session running in the background. 

1. Install screen: `sudo apt-get install screen`
2. Run `screen`
3. Go to your folder and run `node index.js`
4. Close your window, the session will now keep running.
