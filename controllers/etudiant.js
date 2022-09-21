const etudiant = require('../models/etudiant');
const Etudiant = require('../models/etudiant');


// Create Student
exports.createStudent = (req, res, next) => {
    var etudiant = new Etudiant(req.body);
    etudiant.save().then(data => {
        return res.status(201).json({
            success: true,
            msg: 'Successful created new Student',
            student: data
        });
    }).catch(err => {
        console.log(err)
        return res.status(403).json({ err: err });
    });
}

/** Get All Student */
exports.getAllStudent = (req, res, next) => {
    Etudiant.find().populate('cours').then(etudiants => {
        res.send(etudiants);
    }).catch(err => {
        console.log('ERROR', err)
        res.status(401).json({
            error: err
        });
    })
}
