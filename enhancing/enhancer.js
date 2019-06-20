module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const num = item.enhancement
  if (num === 20 ) {
    return {...item}
  } else {
    item.enhancement++
    return { ...item };

  }
}

function fail(item) { 
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
