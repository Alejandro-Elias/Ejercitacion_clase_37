const db = require("../../database/models")
const Op = db.Sequelize.Op

module.exports = {

    list: (req, res) => {

        db.Movie.findAll()
            .then((movies) => {
                return res.render("moviesList", {
                    movies
                })
            })
            .catch(error => console.log(error))
    },
    new: (req, res) => {

        db.Movie.findAll({
            oder: [
                ["release_date", "DESC"]
            ],
            limit : 5
        })
        .then((movies) => {
            return res.render("newestMovies", {
                movies
            })
        })
        .catch(error => console.log(error))

    },
    recomended: (req, res) => {
        db.Movie.findAll({
            where : {
                rating : {[Op.gte]: 8.5 }
            },
            oder: [
                ["rating", "DESC"]
            ],
            limit : 5
        })
        .then((movies) => {
            return res.render("recommendedMovies", {
                movies
            })
        })
        .catch(error => console.log(error))

    },
    detail: (req, res) => {
        const { id } = req.params

        db.Movie.findByPk(id)
            .then((movie) => {
                return res.render('moviesDetail', {
                    movie
                })
            })
            .catch(error => console.log(error))
    }
}