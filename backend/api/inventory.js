const Inventory = require('../models/inventory');
/* -----------------------------------------------------APIs for Inventory(shopping items) related data handling------------------------------------------------- */
// const uniqid = require('uniqid');
// let inventory = new Map();

// inventory = [];

// const item1 = { id: uniqid(), name: 'LapTop-Table', price: 10000, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  " };
// const item2 = { id: uniqid(), name: 'Office-Chair', price: 2000, price: 10000, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"  };
// const item3 = { id: uniqid(), name: 'Water bottle', price: 300, price: 10000, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "  };

// inventory.push(item1);
// inventory.push(item2);
// inventory.push(item3);

const getAll = async () => {
    // return [...inventory.values()];
  let allInventories = await Inventory.find();
  return allInventories;
}

const getById = (id) => {

  const selectedItem = Inventory.findById(id);
  if (!selectedItem) {
    throw new Error(`Not found for the ID ${id}`);
  }
  return selectedItem;
}

const save = async (data) => {
  // const item = { id: uniqid(), name: data.name, price: data.price, description: data.description};
  const item = new Inventory({ name: data.name, price: data.price, description: data.description });
  // console.log('itemm', item);
  await item.save();

  return item;
}

const update = (id, data) => {

  const index = inventory.findIndex(item => item.id === id);

  if (!inventory[index]) {
    throw new Error(`Not found for the ID ${id}`);
  }
  inventory[index] = { id: id, name: data.name, price: data.price, description: data.description };
  return inventory[index];
}

module.exports = {
  getAll,
  getById,
  save,
  update
}
