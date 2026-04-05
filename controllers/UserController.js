exports.getAllUsers = (req, res) =>{
    const users = [{ id: 1, name: 'Alice' }]; 
    res.status(200).json(users);
}

exports.getUserById = (req, res) => {
    const id = Number(req.params.id); 
    
    const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]; 
    const result = users.find(user => user.id === id);
    console.log(result)
    res.status(200).json(result);
}