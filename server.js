const express = require("express");
const cors = require("cors");
const { runWorkflow } = require("./workflow");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/lead", (req, res) => {
    const lead = req.body;

    console.log("New Lead:", lead);

    const result = runWorkflow(lead);

    res.json({ actions: result });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});