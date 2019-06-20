const { repair, succeed, fail, get } = require('./enhancer.js');
// test away!

describe('test repair function', () => {
  it('should return new object with durability of 100', () => {
    let shield = {
      name: 'Shield',
      durability: 85,
      enhancement: 15
    };
    let result = { name: 'Shield', durability: 100, enhancement: 15 };

    expect(repair(shield)).toMatchObject(result);
  });
});


