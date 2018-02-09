var express = require("express");
var bodyParser = require("body-parser");
//var logger = require("morgan");
var mongoose = require("mongoose");

//var axios = require("axios");
var cheerio = require("cheerio");
var request = require("request");

var db = require("./models");

var PORT = 3000;

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

//ya from here down its crap, workin on it
request("http://www.reddit.com/r/civ", function(error, response, html) {

  var $ = cheerio.load(html);

  var results = [];

  $("p.title").each(function(i, element) {

    var link = $(element).children().attr("href");
    var title = $(element).children().text();

    results.push({
      title: title,
      link: link
    });
  });

  console.log(results);
});
