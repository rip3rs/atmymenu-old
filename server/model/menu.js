/**
 * Model for the Menu
 * Included :
 *   @param category id
 *   @param category name
 *   @param Plate_name
 *   @param plate_ingridients
 *   @param spicy
 *   @param vegeterian
 */

const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const MenuSchema  = new Schema({
  plate_name: String,
});

module.exports = mogoose.model('Menu', MenuSchema);
