import express from "express";

let data = [
  {
    alias: "gg",
    link: "https://www.google.com",
  },
  {
    alias: "fb",
    link: "https://www.facebook.com",
  },
];

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/public/abc.html");
});

router.post("/", async (req, res) => {
  const { alias } = req.query;
  const x = data.find((d) => d.alias == alias);
  res.json(x.link || "https://www.google.com");
});

router.get("/data", (req, res) => {
  res.json(data);
});

router.get("/add", (req, res) => {
  const { alias, link } = req.query;
  if (alias && link) {
    data.push({ alias, link });
    res.json("Success");
  } else {
    res.json("Fail");
  }
});

router.get("/delete", (req, res) => {
  const { alias } = req.query;
  if (alias) {
    data = data.filter((d) => d.alias != alias);
    res.json("Deleted");
  } else {
    res.json("Fail");
  }
});

export default router;
