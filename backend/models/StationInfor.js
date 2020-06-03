const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DapAnSchema = new Schema({
    sttIsland : {type:Number},
    sttStation : {type: Number},
    dapAn : {type:String}
});

const DichDenSchema = new Schema({
    sttIsland : {type:Number},
    sttStation : {type: Number},
    xDes : {type: Number},
    yDes : {type: Number}
});

const DeBaiSchema = new Schema({
    sttIsland : {type: Number},
    sttStation : {type: Number},
    deBai : {type: String}
});

const HuongDanSchema = new Schema({
    sttIsland : {type: Number},
    sttStation : {type: Number},
    huongDan : {type: String}
});

const BrickSchema = new Schema({
    sttIsland : {type:Number },
    sttStation : {type: Number },
    xBrick : {type: Number},
    yBrick : {type: Number}
});
  

const StationInforSchema = new Schema({
    sttIsland : {type : Number },
    sttStation : {type : Number },
    HuongDan : HuongDanSchema,
    DeBai : DeBaiSchema,
    DichDen : DichDenSchema,
    DapAn : [DapAnSchema],
    Bricks : [BrickSchema]
})

module.exports = mongoose.model("StationInfor", StationInforSchema);