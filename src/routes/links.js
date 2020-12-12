const express = require('express');
const router = express.Router();

const pool= require('../database');

router.get('/add',(req,res)=>{
    res.render('links/add');
});
router.post('/add', async(req,res)=>{
    const { titulo,url,descripcion } = req.body;
    
    const newLinks={
        titulo,
        url,
        descripcion
    };

    await pool.query('INSERT INTO links set ?',[newLinks]);
    res.send('recibido');
});

module.exports = router;