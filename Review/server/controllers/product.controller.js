const Product = require('../models/product.model');


module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then(allProducts => {
            res.json({results:allProducts})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}    


module.exports.createProduct = (req, res) => {
    //req.body represents form information
    Product.create(req.body)
        .then(newlyCreateProduct => {
        res.json({results:newlyCreateProduct})
    })
    .catch(err => {
        res.json({ msg: "Something went wrong", error: err })
})
    
}


module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(foundProduct => {
            res.json({results:foundProduct})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({ _id: req.params.id },
        req.body,
    {new:true,runValidators:true}) 
        .then(updateProduct => {
            res.json({results:updateProduct})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteProduct => {
            res.json({results:deleteProduct})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


