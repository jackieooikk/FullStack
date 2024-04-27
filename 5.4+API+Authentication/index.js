import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "kitkit";
const yourPassword = "aaaa";
const yourAPIKey = "360dbf6b-22dd-468b-88b5-dfa957e81ba5";
const yourBearerToken = "4bc57fc4-04e6-4a92-9a7a-e53c54b3de2d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result});


  } catch (error) {
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });

    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result});

  } catch (error){}

});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  try {
    const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`);

    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result});

  } catch (error){}
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/secrets/2", {
      headers: {
        Authorization: "Bearer " + yourBearerToken,
      },
    });

    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result});

  } catch (error){}
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
