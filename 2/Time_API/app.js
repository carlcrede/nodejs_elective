const express = require("express");
const app = express();

app.get("/", (req, res) => {
    const date = new Date();
    res.send(
        {
            date: date.toDateString(),
            time: date.toTimeString()
        }
    )
})

app.get("/time", (req, res) => {
    const date = new Date();
    res.send(
        {
            timeObject: 
                {
                    hours: date.getHours(), 
                    minutes: date.getMinutes(), 
                    seconds: date.getSeconds(),
                },
            time: date.toLocaleTimeString()
        }
    );
});

app.get("/day", (req, res) => {
    const date = new Date();
    res.send(
        {
            day: date.toLocaleString("en", { weekday: "long" })
        }
    );
});

app.get("/month", (req, res) => {
    const date = new Date();
    res.send(
        {
            month: date.toLocaleDateString("en", { month: "long" })
        }
    );
});

app.listen(8080);