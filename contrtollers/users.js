//const { ObjectId } = require('mongodb');
const mongodb= require('../data/database');
const ObjectId =require('mongodb').ObjectId;

const getAll= async(req,res)=>{
  //#swagger.tags=['Games']
 const result= await mongodb.getDatabase().db().collection('Games').find();
 result.toArray(req).then((users)=>{
    res.setHeader('Contet-Type','aplication/json');
    res.status(200).json(users)
 });
 };
const getSingle =async(req,res)=>{
    //#swagger.tags=['Games']
    const userId=new ObjectId(req.params.id);
    const result= await mongodb.getDatabase().db().collection('Games').find({id: userId});
    result.toArray().then((users)=>{
       res.setHeader('Contet-Type','aplication/json');
       res.status(200).json(users[0])
    });

};

const createUser= async(req,res) =>{  
    //#swagger.tags=['Games']
    const user={
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,  
    favoriteColor:req.body.favoriteColor,
    birthday:req.body.birthday
};
const response= await mongodb.getDatabase().db().collection('Games').insertOne(user);
     if (response.acknowledged){
     res.status(204).send();
    } else{
      res.status(500).json(response.error||'algo malo papi');
    
    }

};

const updateUser= async(req,res)=>async(req,res) =>{  
    //#swagger.tags=['Games']
    const userId=new ObjectId(req.params.id);
    const user={
    username:req.body.username,
    email:req.body.email,
    name:req.body.name,  
    ipaddress:req.body.ipaddress,
};
const response= await mongodb.getDatabase().db().collection('Games').replaceOne({id: userId}, user);
     if (response.modifiedCount>0){
     res.status(204).send();
    } else{
      res.status(500).json(response.error||'algo malo papi');
    
    }

};

const deleteUser = async (req, res) => {
    //#swagger.tags=['Games']
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDatabase().db().collection('Games').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).json({
      response: response,
      message: "Deleted contact successfully.",
    });
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports={
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};