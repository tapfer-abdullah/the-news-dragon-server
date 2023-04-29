const express = require("express")
const app = express();
const categories = require('./Data.json');
const news = require("./news.json");

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get("/categories", (req, res) =>{
    res.send(categories);
})


app.get("/news", (req, res) =>{
  res.send(news)
})

app.get("/news/:id", (req, res) =>{
  const id = req.params.id;
  console.log(id)

  const singleNews = news.find(n => n._id == id)
  res.send(singleNews || {})
})

app.get("/categories/:id", (req, res) =>{
  const id = req.params.id;
  console.log(id)

  if(id == 0){
    res.send(news);
  }
  else{
    const category = news.filter(n => n.category_id == id);
    res.send(category)
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})