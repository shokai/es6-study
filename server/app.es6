"use strict";

if(!process.env.PORT) process.env.PORT = 3000;

import fs from "fs";
import path from "path";

import _ from "lodash";
import express from "express";

express.static.mime.define({"application/javascript": ["es6"]});

var router = express();
router.set("view engine", "jade");
router.set("views", path.resolve("server/views"));
router.use(express.static(path.resolve()));

function getScripts(){
  return _.flatten(["src/", "dist/"].map((dir) => {
    return fs.readdirSync(dir).map((file) => {
      return path.join(dir, file);
    });
  }));
}

router.get("/", (req, res) => {
  res.render("index", {
    title: "es6-study",
    scripts: getScripts()
  });
});

router.get("/script", (req, res) => {
  if(req.query.src){
    res.render("script", {
      title: "es6-study",
      src: req.query.src
    });
  }
});

router.listen(process.env.PORT);
console.log(`start server - http://localhost:${process.env.PORT}`);
