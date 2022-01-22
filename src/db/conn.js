const mongodb = require('mongoose');
mongodb.connect('mongodb+srv://5433728a:5433728a@cluster0.9nov7.mongodb.net/userAuth?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connected")
}).catch((e)=>{
    console.log('Not connected',e);
    
})
