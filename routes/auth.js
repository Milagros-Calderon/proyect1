const {Router} = express = require('express');
const router = Router();


router.get('/', (req, res) =>{
       res.json({
    ok:true,
    msg: "recibido",
    });
});

//crear usuario,login,eliminar

module.exports = router;