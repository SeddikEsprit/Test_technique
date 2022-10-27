var mongoose=require('mongoose')
var schema=mongoose.Schema
var pokemon=new schema({
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
    weakness:[String],
    prev_evolution:[{
        num:Number,
        name:String
    }],
    next_evolution:[{
        num:Number,
        name:String
    }]

})
var pokemon=mongoose.model('pokemon',pokemon)
module.exports=pokemon
