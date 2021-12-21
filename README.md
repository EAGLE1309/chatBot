# ChatBot by Eagle

Hi guys I have bringed you a really simple but awesome and cool ChatBot for your discord server!



<hr>

### Required Packages:
```
chatBot@1.2.0
├── colors@1.4.0
├── discord-reply@0.1.2
├── discord.js@13.3.1
├── dotenv@10.0.0
└── node-fetch@2.6.6
```

**Note that:** This bot only works on discord.js v13
> Check your current discord.js version
> 
`npm list discord.js`

> If you have v12 installed then,
> 
```
npm uninstall discord.js then,
npm i discord.js@13.3.1
```

<hr>



### How to use?
**1.** Create a repl of this repository by clicking [here](https://repl.it/github/EAGLE1309/chatBot)
</br>
</br>
**2.** After this
```
Go to config.json
```
Replace `<channel-id>` with the id of channel where the bot will talk!
</br>
You can also set custom status of bot! Following is the guide
```javascript
// in config.json
"activityType": "PLAYING", // LISTENING, WATCHING, STREAMING
"activityName": "with Discord" //The message shown
```
</br>
</br>

**3.** Create a new secret environment variable as shown in following images
```javascript
// Put the following values in it
Key: Token
Value: Your Bot's Token
```
![.env replit](https://cdn.discordapp.com/attachments/846698526821449778/847015729106386954/Screenshot_2021-05-26-13-07-03-47.jpg)

</br>
</br>

**4.** Just run your repl and done! `Enjoy!`

### Screenshots
**Discord:**
![Screenshot1](https://cdn.discordapp.com/attachments/846698526821449778/846698559969296424/Screenshot_2021-05-25-16-07-05-76_572064f74bd5f9fa804b05334aa4f912.jpg)
**Terminal:**
![Screenshot2](https://cdn.discordapp.com/attachments/846698526821449778/846698792245657610/Screenshot_2021-05-25-16-08-32-42_c30cd925e7b7f067eb8ca2fbf963a62c.jpg)


<br>
<hr>

# Bot hosting guide
**24/7 bot hosting free:**
</br>
</br>
**1.** Go to index.js and paste the following code on top of it
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Successfully Hosted!'));

app.listen(port, () => console.log(`Discord bot listening at http://localhost:${port}`));
```
</br>
</br>

**2.** Go to [uptimeRobot](https://uptimerobot.com/) and create a new account!

</br>
</br>

**3.** Create a new monitor with type https and paste the link there as shown in images
![Copying Link](https://cdn.discordapp.com/attachments/846698526821449778/846787482645037066/IMG_20210525_220059.jpg)

</br>

![uptimeRobot](https://cdn.discordapp.com/attachments/846698526821449778/846787482989101086/IMG_20210525_220020.jpg)
</br>
</br>

**4.** And done your bot is successfully hosted for 24/7!
</br>
<hr>


#### Made By: Eagle
![](https://socialify.git.ci/EAGLE1309/chatBot/image?font=Source%20Code%20Pro&language=1&owner=1&pattern=Circuit%20Board&theme=Dark)
