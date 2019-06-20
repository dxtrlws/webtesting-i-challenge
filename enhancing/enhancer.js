module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  const num = item.enhancement;
  if (num === 20) {
    return { ...item };
  } else {
    item.enhancement++;
    return { ...item };
  }
}

function fail(item) {
  if (item.enhancement <= 15) {
    const newDur = item.durability - 5;
    item.durability = newDur;
    return { ...item };
  } else if (item.enhancement <= 16) {
    const newDur = item.durability - 10;
    item.durability = newDur;
    return item;
  } else if (item.enhancement >= 17) {
    let newDur = item.durability - 1;
    item.durability = newDur;
    return item;
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
