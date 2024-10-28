const Products = require('../models/product');

const productCtrl = {
    getProducts:async(req,res)=>{
        try{
        //   const features = new APIfeatures(Products.find(),req.query).filtering
           const products = await Products.find()
           console.log(req.query)
           res.json(products)
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}
module.exports = productCtrl    