import express from 'express';
import translate from 'translate';

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.post('/translate', async (req, res) => {
    translate.engine = 'google';
    try {
        const text = await translate(req.body.text, "fr");
        console.log(text);
        res.json({translated: text}); // Sending translated text as response
    } catch (e) {
        console.log("Error", e);
        res.status(500).send('Translation failed'); // Sending error response
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
