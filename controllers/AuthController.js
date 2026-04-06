exports.login = (req, res) => {
    if(req.name == 'demo'){
        res.send("loggedin");
    }
}