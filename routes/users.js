const express= require('express');
const router =express.Router();

const usersController=require('../contrtollers/users');
const{validateCreate}=require('../Validator/users');

router.get('/', usersController.getAll);
router.get('/:id',usersController.getSingle);
router.post('/',validateCreate, usersController.createUser);
router.put('/:id',usersController.updateUser);
router.delete('/:id', usersController.deleteUser);


module.exports=router;