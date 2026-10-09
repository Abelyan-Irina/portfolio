// console.log("Worked;");
const express = require("express");
const QRcode  = require("qrcode");
const     app = express();
const PORT    = 3000;
const path    = require("path");

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/program", async (req, res) => {
    const text = req.query.text || "http://www.example.com";

    try {
        const photo = await QRcode.toDataURL(text);
        
        res.json(photo);
    }
    catch {
        res.status(505).send("Սխալ Համակարգում");
    }

});

app.listen(PORT, () => {
    console.log("Server Worked At http://localhost:3000");
});
