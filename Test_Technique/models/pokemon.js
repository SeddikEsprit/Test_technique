var mongoose=require('mongoose')
var schema=mongoose.Schema
var Pokemon=new schema({
    num:Number,
    name:String,
    img:String,
    type:[String],
    height:String,
    weight:String,
    candy:String,
    candy_count:Number,
    egg:String,
    spawn_chance:Number,
    avg_spawns:Number,
    spawn_time:String,
    multipliers:[Number],
    weaknesses:[String],
    prev_evolution:[{
        num:Number,
        name:String
    }],
    next_evolution:[{
        num:Number,
        name:String
    }]

})
var Pokemon=mongoose.model('pokemon',Pokemon)
module.exports=Pokemon
