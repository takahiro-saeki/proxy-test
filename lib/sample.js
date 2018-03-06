var sample = function sample(data) {
  return function (param) {
    return data + param;
  };
};

console.log(sample(4)(8));