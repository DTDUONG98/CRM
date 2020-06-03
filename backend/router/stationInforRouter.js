const express = require('express');
const stationInforRouter = express.Router();
const stationInforModel = require('../models/StationInfor');

stationInforRouter.get('/:sttIsland/:sttStation',(req,res)=>{ // lay thong tin cua Station qua stt Island va stt Station
    var data = {
        sttIsland : req.params.sttIsland,
        sttStation : req.params.sttStation
    }
    stationInforModel.find(data,(err,station)=>{
        if(err) res.status(500).send({success:0 , err});
        else res.status(201).send({success:1,station});
    })
})

stationInforRouter.put('/bricks/:sttIsland/:sttStation',(req,res)=>{  // bo sung Gach 
    var brick = {
        xBrick = req.body.xBrick,
        yBrick = req.body.yBrick
    }
    stationInforModel.find({sttStation:req.params.sttStation,sttIsland:req.params.sttIsland},(err,station)=>{
        if(err) res.status(500).send({success:0,err});
        else{
            station.Bricks.push(brick);
            station.save((err,newStation)=>{
                if(err) res.status(500).send({success:0,err});
                else res.status(201).send({success:1,newStation})
            })
        }
    })

})

stationInforRouter.put('/bricks/:sttIsland/:sttStation',(req,res)=>{  // bo sung Gach 
    var brick = {
        xBrick = req.body.xBrick,
        yBrick = req.body.yBrick
    }
    stationInforModel.find({sttStation:req.params.sttStation,sttIsland:req.params.sttIsland},(err,station)=>{
        if(err) res.status(500).send({success:0,err});
        else{
            station.Bricks.push(brick);
            station.save((err,newStation)=>{
                if(err) res.status(500).send({success:0,err});
                else res.status(201).send({success:1,newStation})
            })
        }
    })

})

stationInforRouter.post('/',(req,res)=>{
    var data = {
        sttStation: req.body.sttStation,
        sttIsland : req.body.sttIsland,
    }
})

module.exports = stationInforRouter;
