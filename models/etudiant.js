var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Etudiant = new Schema({


    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    adresse: {
        type: String
    },
    cours: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Cours"
        }
      ],
  


});



module.exports = mongoose.model('Etudiant', Etudiant);
