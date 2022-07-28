module.exports = errorhandler => (req, res, next) =>{
    Promise.resolve(errorhandler(req, res, next))
        .catch(next)
}