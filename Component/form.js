const router=require('express').Router();
let Form=require('../Model/form.model');

router.route('/add').post((req,res)=>{
    const name=req.body.name;
    const companyName=req.body.companyName;
    const phoneNumber=req.body.phoneNumber;
    const email=req.body.email;
    const userResponses=req.body.userResponses;
    const newForm=new Form({
        name,
        companyName,
        phoneNumber,
        email,
        userResponses,
    });
    newForm.save()
        .then(()=>res.json('Form added!'))
        .catch(err=>{
            res.json('Error:'+err);
        });
});

module.exports=router;
