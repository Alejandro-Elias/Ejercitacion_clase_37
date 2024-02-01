const db = require("../../database/models")

module.exports = {
    list : (req,res) => {
        db.Actor.findAll()
        .then(actors => {
            res.render("actorsList", {
                actors
            })
        })
        .catch(error => console.log(error))

    },
    detail : (req,res) => {
        const { id } = req.params
        

        db.Actor.findByPk(id)
            .then((actors) => {
                return res.render('actorsDetail', {
                    actors
                })
            })
            .catch(error => console.log(error))
    }
}