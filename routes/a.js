const express = require('express');
const router = express.Router();
const Tuition =  require('../models/a');


router.get('/', async (req,res) => {
    try{
        const tuition = await Tuition.find();
        res.json(tuition)
    }catch(err){
        res.send('Error' + err)
    }
} );

router.get('/:id', async (req,res) => {
    try{
        const tuition = await Tuition.findById(req.params.id);
        res.json(tuition)
    }catch(err){
        res.send('Error' + err)
    }
} );


router.post('/', async (req,res) => {
    const tuition = new Tuition({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try {
        const t = await tuition.save()
        res.json(t)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req,res) => {
    try {
        const tuition = await Tuition.findById(req.params.id)
        tuition.sub =req.body.sub
        const t = await tuition.save()
        res.json(t)
    } catch (err) {
        res.send('Error')
    }
})

// // put method
// router.put('/:id', async (req,res) => {
    
//         const tuition = await Tuition.findByAndUpdate(req.params.id)

//         if(tuition){
//             const updateUser = req.body;
//             Tuition.forEach(user => {
//                 if(user,id == findByAndUpdate(req,params,id)){
//                     user.name = updateUser.name ? updateUser.name: user.name
//                     user.tech = updateUser.tech ? updateUser.tech: user.tech
//                     user.sub = updateUser.sub ? updateUser.tech: user.sub
//                     res.json({msg: 'User update', user})

//                 }
//             })
//         }
// })



// Delete

router.delete('/:id', async (req,res) => {
    try {
        // console.log(req.body);
     await Tuition.deleteOne({_id:req.params.id})
        res.json({msg:"ok"})
    } catch (err) {
        res.send(err)
    }
})


module.exports = router 