const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");

const Tennis = require("./models/contacts");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
// const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
// hbs.registerPartials(partials_path);

app.get("/", (req,res)=> {
    res.render("index")
});
app.post("/index", async(req,res)=> {
   try {
    const TennisInfo = new Tennis({
        firstname: req.body.firstname,
        city: req.body.city,
        dob: req.body.dob,
        whatsapp: req.body.whatsapp,
        events: req.body.events,
        partner: req.body.partner,
        dinner: req.body.dinner,
        drink: req.body.drink,
        code: req.body.code
    })
    const contacted = await TennisInfo.save();
    res.status(201).render("successful");
   } catch (error) {
    res.status(400).send(error);
   }
});

app.listen(port, ()=> {
    console.log(`server is running at port no. ${port}`);
})