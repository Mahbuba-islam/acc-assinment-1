let user = require('../utilitis/data.js')

module.exports.getAllUser =
(req, res, next)=>{
    const{limit}= req.query
    console.log(limit)
    res.send(user.slice(0,limit))
 }

 module.exports.saveUser = (req, res)=>{
   user.push(req.body)
    res.send(user)
 }
 
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