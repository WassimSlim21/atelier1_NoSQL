const Cours = require('../models/cours');


// Create Cours
exports.createCours = (req, res, next) => {
	var cours = new Cours(req.body);
	cours.save().then(cours => {
		return res.status(201).json({ 
            success: true, 
            msg: 'Successful created new Cours', 
            cours: cours });  
	}).catch(err => {
		console.log(err)
		return res.status(403).json({ err: err });
	});


}

/** Get All Cours */
exports.getAllCours = (req, res, next) => {
	Cours.find().populate('etudiants').populate('prerequis').then(cours => {
		res.send(cours);
	}).catch(err => {
		console.log('ERROR', err)
		res.status(401).json({
			error: err
		});
	})
}
