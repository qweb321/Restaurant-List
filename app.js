const express = require("express");
const port = 3000;
const exhpbs = require("express-handlebars");
const restaurantList = require("./restaurant.json");

const app = express();

app.engine("handlebars", exhpbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

// home
app.get("/", (req, res) => {
  const restList = restaurantList.results;
  res.render("index", { restList: restList });
});

// Show information
app.get("/restaurants/:id", (req, res) => {
  const restaurant = restaurantList.results.filter((rest) => {
    return rest.id == req.params.id;
  });
  res.render("show", { restaurant: restaurant[0] });
});

app.get("/search", (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase();
  const searchList = restaurantList.results.filter((rest) => {
    const searchByName = rest.name_en.toLowerCase().includes(keyword);
    const searchByCategory = rest.category.toLowerCase().includes(keyword);
    const searchByNameCh = rest.name.toLowerCase().includes(keyword);

    // Search by three types, name, name_en and category
    if (searchByName) {
      return searchByName;
    } else if (searchByNameCh) {
      return searchByNameCh;
    } else {
      return searchByCategory;
    }
  });

  if (!searchList.length) {
    res.render("cannot_found");
  } else {
    res.render("index", {
      restList: searchList,
      keyword: req.query.keyword.trim(),
    });
  }
});

app.listen(port, () => {
  console.log(`app is listening in http://localhost:${port}`);
});
