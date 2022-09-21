var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Cours = new Schema({
    code: {
        type: String
    },
    titre: {
        type: String
    },
    description: {
        type: String
    },
    credit: {
        type: Number
    },
    etudiants: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Etudiant"
        }
      ],
      prerequis: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Cours",            
        },
      ],
});
module.exports = mongoose.model('Cours', Cours);
