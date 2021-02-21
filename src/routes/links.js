const express = require("express");
const router = express.Router();

const sql = require("../database");

router.get("/add", (req, res) => {
  res.render("links/add");
});
router.post("/add", async (req, res) => {
  const { titulo, url, descripcion } = req.body;

  const newLinks = {
    titulo,
    url,
    descripcion,
  };

  await sql.query("INSERT INTO links set ?", [newLinks]);
  req.flash("success", "Guardado exitosamente");
  res.redirect("/links");
});

router.get("/", (req, res) => {
  const links = sql.query("SELECT * FROM links");
  res.render("links/list", { links });
});

router.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  const links = sql.query("SELECT * FROM links WHERE id = ?", [id]);
  res.render("/links/edit", { links: links });
});

router.post("/edit/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, url, descripcion } = req.body;
  const newLinks = {
    titulo,
    url,
    descripcion,
  };
  sql.query("UPDATE links set ? WHERE id = ?", [newLinks, id]);
  req.flash("success", "Actualizado exitosamente");
  res.redirect("/links");
});

router.get("/delete/:id", (req, res) => {
  const { id } = req.params;
  sql.query("DELETE FROM links WHERE id = ?", [id]);
  req.flash("success", "Eliminado exitosamente");
  res.redirect("/links");
});

module.exports = router;
