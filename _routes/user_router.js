const express = require('express');
const { Users_model } = require('../_models')
const {validateUser} = require('../_helpers/_validator')

const router = express.Router();

//CREATE USER
router.post('/create_users', validateUser, async (req, res)=>{
    try {
        let created_user = await Users_model.create(req.body)

        return res.send(created_user)
    }catch (e){
        res.json({ error: e.message || e.toString() });
    }
})

//READ ALL USERS
router.get('/get_all_users/:page/:limit', async (req, res)=>{
    try {
        const page = parseInt(req.params.page);
        const limit = parseInt(req.params.limit);

        const startIndex = (page - 1) * limit;
       
        const endIndex = page * limit;

        const results = {};

        if(endIndex < await Users_model.countDocuments()){
            results.next = {
                page: page+1,
                limit: limit
            }
        }

        if(startIndex>0){
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }

        results.results = await Users_model.find({}).limit(limit).skip(startIndex)

        return res.send(results)
    }catch (e){
        res.json({ error: e.message || e.toString() });
    }
})

//READ USER BY ID
router.get('/get_user/:id', async (req, res)=>{
    let {id} = req.params;

    try {
        let users = await Users_model.findById({_id : id})

        return res.send(users)
    }catch (e){
        res.json({ error: e.message || e.toString() });
    }
})

//UPDATE USER By ID
router.put('/update_user/:id', validateUser, async (req,res)=>{
    let {id} = req.params;
    
    try {
        let updatedUser = await Users_model.findByIdAndUpdate({_id : id}, req.body, {new:true});

        return res.send(updatedUser)
    }catch (e){
        res.json({ error: e.message || e.toString() });
    }
})

//DELETE USER
router.delete('/delete_user/:id', async (req,res)=>{
    let {id} = req.params;
    
    try {
        let removedUser = await Users_model.findByIdAndRemove({_id : id});
        if(!removedUser){
            return res.send({error : 'There is no user exists with given id'})
        }
        return res.send(removedUser)
    }catch (e){
        res.json({ error: e.message || e.toString() });
    }
})

module.exports = router;