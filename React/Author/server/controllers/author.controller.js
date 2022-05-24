const Author = require('../models/author.model');


module.exports.findAllAuthors = (req,res) => {
    Author.find()
        .then(allAuthors => {
            res.json({results:allAuthors})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}    


module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreateAuthor => {
        res.json({results:newlyCreateAuthor})
    })
    .catch(err => {
        res.json({ msg: "Something went wrong", error: err })
})
    
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(foundAuthor => {
            res.json({results:foundAuthor})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({ _id: req.params.id },
        req.body,
    {new:true,runValidators:true}) 
        .then(updateAuthor => {
            res.json({results:updateAuthor})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteAuthor => {
            res.json({results:deleteAuthor})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


module.exports.findRandomAuthor = (req,res) => {
    Author.find()
        .then(allAuthors => {
            let randomIdx=Math.floor(Math.random()*allAuthors.length)

            res.json({results:allAuthors[randomIdx]})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}