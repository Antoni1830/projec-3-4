const{check}= require('express-validator')
const{validateResult}=require('../helpers/validateHelper')
const validateCreate=[ // Game,bestPlayer,UserName,favoriteColor,birthday
check('Game').exists().not().isEmpty(), 
check('bestPlayer').exists().not().isEmpty(),
check('UserName').exists().not().isEmpty(),
check('favoriteColor').exists().not().isEmpty(),
check('birthday').exists().isNumeric(),
(req,res,next)=>{
    validateResult(req,res,next)

}
]

module.exports={validateCreate}