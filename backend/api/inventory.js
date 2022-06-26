const Inventory = require('../models/inventory');

const getAll = async () => {
  let allInventories = await Inventory.find({});
  console.log('all', allInventories);
  return allInventories;
}

const save = (data) => {
  const item = new Inventory({ name: data.name, price: data.price, description: data.description });
  console.log('itemm', item);
  item.save()
    .then((res) => {
      console.log('res: ', res);
    })
    .catch((err) => {
    console.log('errorr', err)
  })
}

module.exports = {
  getAll,
  save,
}
