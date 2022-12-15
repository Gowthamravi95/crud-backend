const router =require('express').Router()
const Users=require('./model') 


// get all user from api 
router.get('/users',async(req,res)=>{
    var users = await Users.find();
    res.json(users);
})


// create user in api 
router.post('/users/add',async(req,res)=>{
    var user =new Users({
        name:req.body.name,
        age:req.body.age,
        location:req.body.location
    })
    await user.save()
    res.json(user)
})

// update user 
router.put('/users/update',async(req,res)=>{
    var update =await Users.findByIdAndUpdate({_id:req.body._id},{
        name:req.body.name,
        age:req.body.age,
        location:req.body.location
    })
    res.json(update);
})


// delete user 
router.delete('/users/del/:id',(req,res)=>{
    Users.findByIdAndDelete(req.params.id).then(e=>{
        res.json({message:"deleted sucessfully"})
    })
})

module.exports= router;