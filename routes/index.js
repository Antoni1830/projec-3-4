const router= require('express').Router();

router.use('/',require('./sawgger'));

router.get('/',(req,res)=>{
    //#swagger.tags=['hello world']
    res.send('On this page are the best players');
});
//router.get('/',(req,res)=>{res.send('qlq el mio')});

router.use('/users',require('./users'))
module.exports=router;