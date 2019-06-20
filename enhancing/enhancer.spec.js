const { repair, succeed, fail, get } = require('./enhancer.js');
// test away!

describe('test repair function', () => {
  test('should return new object with durability of 100', () => {
    let shield = {
      name: 'Shield',
      durability: 85,
      enhancement: 15
    };
    let result = { name: 'Shield', durability: 100, enhancement: 15 };

    expect(repair(shield)).toMatchObject(result);
  });
  
});

describe('test for success function', () => {
    test('should increate enhancement by 1', () => {
        let shield = {
            name: 'Shield',
            durability: 85,
            enhancement: 15
          };
          let result = { name: 'Shield', durability: 85, enhancement: 16 };
          expect(succeed(shield)).toMatchObject(result);
    })
    test('should not change enhnament level if it is already at 20 ', () => {
        let shield = {
            name: 'Shield',
            durability: 85,
            enhancement: 20
          };
          let result = { name: 'Shield', durability: 85, enhancement: 20 };
          expect(succeed(shield)).toMatchObject(result);
    })
})





