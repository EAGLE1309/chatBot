# Bot hosting guide
**24/7 bot hosting free:**

**1.** Go to index.js and paste the following code on top of it
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Successfully Hosted!'));

app.listen(port, () => console.log(`Discord bot listening at http://localhost:${port}`));
```


**2.** Go to [uptimeRobot](https://uptimerobot.com/) and create a new account!



**3.** Create a new monitor with type https and paste the link there as shown in images
![Copying Link](https://cdn.discordapp.com/attachments/846698526821449778/846787482645037066/IMG_20210525_220059.jpg)



![uptimeRobot](https://cdn.discordapp.com/attachments/846698526821449778/846787482989101086/IMG_20210525_220020.jpg)


**4.** And done your bot is successfully hosted for 24/7!
