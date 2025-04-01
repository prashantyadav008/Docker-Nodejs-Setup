/** @format */

const express = require("express");
const app = express();

const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://root:root123@localhost:27017";
const client = new MongoClient(URL);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/addUsers", async (req, res) => {
  try {
    const body = req.body;
    console.log("body --->>>", body);

    await client.connect();
    console.log("\n Database Connected successfully --->>");

    const db = client.db("docker-db");
    const data = await db.collection("users").insertOne(body);
    console.log("data --->>", data);

    client.close();

    res.status(200).json({ status: true, message: "User added successfully" });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ status: false, message: "Something went wrong to Add User" });
  }
});

app.get("/viewUsers", async (req, res) => {
  try {
    await client.connect(URL);
    console.log("\n Database Connected successfully --->>");

    const db = client.db("docker-db");
    const data = await db.collection("users").find({}).toArray();
    console.log("data --->>", data);

    client.close();

    res.status(200).json({
      status: true,
      message: "Fetch Users Detail successfully",
      data: data,
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ status: false, message: "Something went wrong to Get Users" });
  }
});

const port = 3000;

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
