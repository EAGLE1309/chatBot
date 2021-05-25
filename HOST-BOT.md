#Bot hosting guide
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
