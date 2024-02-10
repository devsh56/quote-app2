const Quotes = require('../models/Quote')
const router = require('express').Router();

router.get('/allquotes' , async (req,res)=>{
    try{
        let allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'})
    }
})


router.post('/addquotes' , async(req,res)=>{
    let {text , author} = req.body;
    await Quotes.create({text , author});
    res.status(201).json({msg:"new quote created successfully"})
})


router.get('/quotes/:id' , async(req,res)=>{
    let {id} = req.params;
    const quote = await Quotes.findById(id);
    res.status(200).json(quote);
})

router.get('/quotes/edit/:id' , async(req,res)=>{
    let {id} = req.params;
    const quote = await Quotes.findById(id);
    res.status(200).json(quote);
})
router.patch('/updatequotes/:id' , async(req,res)=>{
    let {id} = req.params;
    let {author,text} = req.body;
    await Quotes.findByIdAndUpdate( id , {author,text}  )
    res.status(200).json({msg:"kaam ho gya guru jee"});
})
router.delete('/deletequote/:id' , async(req,res)=>{
    let {id} = req.params;
    await Quotes.findByIdAndDelete(id);
    res.status(200).json({msg:"kaam ho gya guru jee delete kardiya"});
})


module.exports = router;