let user = require('../utilitis/data.js')
const { check, validationResult } = require('express-validator');

module.exports.getAllUser =
(req, res, next)=>{
    const{limit}= req.query
    console.log(limit)
    res.send(user.slice(0,limit))
 }

 module.exports.saveUser = (req, res)=>{
   user.push(req.body)
   const name  = req.body.name
  const gender = req.body.gender
  const contact   = req.body.contact
  if(name , gender, contact !== req.body){
    res.send(user)
  }
  else{
    res.send('bad request')
  }
    
  
  }
 
      
    
    
   
   
//    else{
    
//     res.send('bad request')
//    }
   
 
 
module.exports.randomUser=(req,res)=>{
    const {id} = req.params
    
    const foundUser = user.find(user => user.Id === Number(id))
    res.send(foundUser)
}

module.exports.updateUser=(req,res)=>{
//    const newData = req.body
   const {id} = req.params
   
   const newData = user.find(user => user.Id === Number(id))
   newData.Id = id
   newData.name = req.body
   res.send(newData)

}

module.exports.deleteUser=(req, res)=>{
  const {id} = req.params
  const filter = {Id:id}
  user =  user.filter(user => user.Id !== Number(id))
  res.send(user)
}