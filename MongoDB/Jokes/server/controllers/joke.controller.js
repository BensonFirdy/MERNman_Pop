const Joke = require('../models/joke.model');//import the model so that the controller know how to talk to the db to query the db

module.exports.sayHello = (req, res) => {
    res.json({msg:"Hello, Will this be Joke API"})
}


module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => {
            res.json({results:allJokes})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}    


module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreateJoke => {
        res.json({results:newlyCreateJoke})
    })
    .catch(err => {
        res.json({ msg: "Something went wrong", error: err })
})
    
}


module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(foundJoke => {
            res.json({results:foundJoke})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({ _id: req.params.id },
        req.body,
    {new:true,runValidators:true}) 
        .then(updateJoke => {
            res.json({results:updateJoke})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deleteJoke => {
            res.json({results:deleteJoke})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


module.exports.findRandomJoke = (req,res) => {
    Joke.find()
        .then(allJokes => {
            let randomIdx=Math.floor(Math.random()*allJokes.length)

            res.json({results:allJokes[randomIdx]})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}