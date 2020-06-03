const express = require('express');
const studentRouter = express.Router();
const studentModel = require('../models/Student');

studentRouter.get("/",(req,res)=>{     
    studentModel.find({},(err,students)=>{
        if(err) res.status(500).send({ success: 0, err });
        else res.status(201).send({ success: 1, students });
    })
})

studentRouter.get("/:idStudent",(req,res)=>{
    var id = req.params.idStudent;
    studentModel.findById(id,(err,student)=>{
        if(err) res.status(500).send({ success: 0, err });
        else res.status(201).send({ success: 1, student });
    })
})

studentRouter.put("/:idStudent",(req,res)=>{
    const { fullName, dateOfBirth, school, avatarUrl, password, islands } = req.body;
    const UpdateData = {fullName, dateOfBirth, school, avatarUrl, password, islands}
    studentModel.findById(req.params.idStudent,(err,StudentFound)=>{
        if(err) res.status(500).send({success:0,err});
        if(!StudentFound) res.status(404).send({success:0,message:'Ko tim thay student'});
        else {
            for(let key in UpdateDate){
                if(updateData[key]) StudentFound[key] = UpdateData[key]
            }

            StudentFound.save((err,StudentUpdated)=>{
                if(err) res.status(500).send({success:0, errors:"loi"});
                else res.status(201).send({success:1, StudentUpdated});
            })

        }
    })
})

studentRouter.post("/",(req,res)=>{
    data = {
        userName : req.body.userName ,
        fullName : req.body.fullName,
        dateOfBirth : req.body.dateOfBirth,
        school : req.body.school,
        password : req.body.password,
        islands : [
            {
                name: "Logic"
                
            },
            {
                name: "KeyWord"
            },
            {
                name: "Coding"
            }
        ]
    }
    
    studentModel.create(data,(err,newstudent)=>{
        if(err) res.status(500).send({ success: 0, err });
        else res.status(201).send({ success: 1, newstudent });
    })
})

studentRouter.post("/login",(req,res)=>{
    var userName = req.body.userName;
    var password = req.body.password;
    studentModel.findOne({userName,password},(err,student)=>{
        if(err) res.status(500).send({success:0,err});
        else if(student == null) res.status(400).send({success:0,message:"Ten dang nhap hoac mat khau khong dung"});
        else res.status(201).send({success:1,student});
    })
})

studentRouter.post("/register",(req,res)=>{
    data = {
        userName : req.body.userName ,
        fullName : req.body.fullName,
        dateOfBirth : req.body.dateOfBirth,
        school : req.body.school,
        password : req.body.password,
        islands : [
            {
                name: "Logic",
                stations : [
                    {},{},{},{}
                ]
            },
            {
                name: "KeyWord",
                stations : [
                    {},{},{},{}
                ]
            },
            {
                name: "Coding",
                stations : [
                    {},{},{},{}
                ]
            }
        ]
    }
    studentModel.createIndexes(data,(err,newstudent)=>{
        if(err) res.status(500).send({ success: 0, err });
        else {

            res.status(201).send({ success: 1, newstudent });
        }
    })
})

studentRouter.get("/:idStudent",(req,res)=>{
    var id = req.params.idStudent;
    studentModel.findById(id,(err,student)=>{
        if(err) res.status(500).send({ success: 0, err });
        else res.status(201).send({ success: 1, student });
    })
})

module.exports = studentRouter ;