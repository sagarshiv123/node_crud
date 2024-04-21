const express = require('express')
const app = express();
const db = require('./db')

const bodyParser = require('body-parser');
const MenuItem = require('./models/menuitem');




app.use(bodyParser.json());



//menu items

app.post('/menuitem', async (req,res)=>{
   
    try{
        const menuData = req.body
        const newItems = new MenuItem(menuData);
        const resItem = await newItems.save();
        res.status(200).json(resItem);
        console.log('data saved');
    }
    catch(err){
        res.status(500).json({error:' Internal server error'})
        console.log(err);
    }
    
})

app.get('/menuitem', async (req,res)=>{

    try{
          const menuData = await MenuItem.find();
          res.status(200).json(menuData);
          console.log('data fache');
    }
    catch(err){
       res.status(500).json({error:'Internal server error'});
       console.log(err)
    }
})






const personRoutes = require('./routes/personRoutes')

app.use('/person',personRoutes);


app.listen(3000, ()=>{
    console.log('this is port no 3000')
})