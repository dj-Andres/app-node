const express = require('express');
const router = express.Router();

const sql= require('../database');

router.get('/add',(req,res)=>{
    res.render('links/add');
});
router.post('/add',async(req,res)=>{
    const { titulo,url,descripcion } = req.body;
    
    const newLinks={
        titulo,
        url,
        descripcion
    };

    console.log(newLinks);

    await sql.query('INSERT INTO links set ?',[newLinks]);
    res.redirect('links/');
});

router.get('/',(req,res)=>{
    const links =  sql.query('SELECT * FROM links');
    console.log(links);
    res.render('links/list',{ links });
});

module.exports = router;