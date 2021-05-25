# chatBot by Eagle

Hi guys I have bringed you a really simple but awesome and cool ChatBot for your discord server!

**Usage:** </br>
**1.** Create a repl of this repository by clicking [here](https://repl.it/github/EAGLE1309/chatBot)
</br>
</br>
**2.** After this
```
Go to config.json
```
Replace `<channel-name>` with the name of channel where the bot will talk!
</br>
</br>
**3.** Create a new file named `.env` and copy paste the following code in it
```
Token=your-token-here
```
Replace `your-token-here` with your bot's token!
</br>
</br>
**4.** Just run your repl and done! `Enjoy!`

### Screenshots
**Discord:**
![Screenshot1](https://cdn.discordapp.com/attachments/846698526821449778/846698559969296424/Screenshot_2021-05-25-16-07-05-76_572064f74bd5f9fa804b05334aa4f912.jpg)
**Terminal:**
![Screenshot2](https://cdn.discordapp.com/attachments/846698526821449778/846698792245657610/Screenshot_2021-05-25-16-08-32-42_c30cd925e7b7f067eb8ca2fbf963a62c.jpg)


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
**2.** Go to [uptimeRobot] and create a new account!
</br>
</br>
**3.** Create a new monitor with type https and paste the link there as shown in images
</br>
</br>
**4.** And done your bot is successfully hosted for 24/7!
