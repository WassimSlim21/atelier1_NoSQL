var User = require('../models/user')
exports.addUser= (req, res, next) => {
  console.log(req.body);
var user = new User(req.body)
 
  user.save().then(data => {
    return res.status(201).json({
      success:true, msg:'a User created', data:data
    })  }

  ).catch(err=>{
    console.log(err)
		return res.status(403).json({ err: err });
  });
  

  }
  exports.getUser= (req, res, next) => {
    console.log("req", req.body);
    // console.log("res", res);
    console.log("User routes");
    res.send('You are in the user controller');

  }
  
  exports.deleteUser= (req, res, next) => {
    console.log("req", req.body);
    // console.log("res", res);
    console.log("User routes");
    res.send('You are in the user controller');

  }
  