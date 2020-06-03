const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OtoSchema = new Schema({
    xOto : {type:Number, default: 0},
    yOto : {type:Number, default: 0}
});
  
const KetQuaSchema = new Schema({
   KetQua : {type: String}
});

const LoiGiaiSchema = new Schema({
    loiGiai : {type: String}
});

const StationSchema = new Schema({
    sttStation : {type:Number},
    diem : {type: Number , default: 0},
    time : {type: Number},
    ketqua : [KetQuaSchema],
    oto : OtoSchema,
    loiGiai : [LoiGiaiSchema]
});

const IslandSchema = new Schema({
    name : {type: String },
    sttIsland : {type: Number },
    soBaiDaQua : {type: Number, default:0},
    stations : [StationSchema]

});
  
const StudentSchema = new Schema({
    userName : { type: String, required: true, unique: true },
    fullName : { type: String, required: true},
    dateOfBirth : {type: Date, required: true},
    school : {type: String, required: true},
    avatarUrl : {type:String, default:"https://www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg"},
    password : {type:String , required: true}, 
    islands : [IslandSchema]
});
 
module.exports = mongoose.model("Student", StudentSchema);