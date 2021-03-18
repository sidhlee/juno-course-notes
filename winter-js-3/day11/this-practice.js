const warrior = {
  equipmentL: 'shield',
  energy: 100,
  location: {
    x: 0,
    y: 0,
  },
  walk(dx, dy) {
    const { x, y } = warrior.location;
    warrior.location = {
      x: x + dx,
      y: y + dy,
    };
  },
  strike(damage) {
    warrior.energy = warrior.energy - damage;
  },
  switchEquipment(newEquip) {
    warrior.equipmentL = newEquip;
  },
};

const animal = {
  name: 'Bert',
  type: 'Bunny',
  cuteness: 10,
  beAdorable: function () {
    return this.cuteness * 2;
  },
  activity: {
    hopAround: function () {
      return this.cuteness * 4;
    },
  },
};

// Would this work?
animal.activity.hopAround(); // NO.(this === activity)
