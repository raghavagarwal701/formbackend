const router=require('express').Router();
let Exercise=require('../Model/exercise.model');


router.route('/form').post((req,res)=>{
    const username=req.body.username;
    const companyName=req.body.companyName;
    const phoneNumber=Number(req.body.phoneNumber);
    const email=req.body.email;
    console.log(req.body);
    const newExercise=new Exercise({
        username,
        companyName,
        phoneNumber,
        email,
    });

    newExercise.save() //returns a promise
        .then(()=>res.json('Exercise added!'))
        .catch(err=>{
            res.status(404).json('Error:'+err);
            console.log("Idhar hai error");
        });
});

module.exports=router;