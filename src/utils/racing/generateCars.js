export const generateCars = (nameArray) => {
  const cars = nameArray.reduce((cars, name) => {
    cars[name] = [];
    return cars;
  }, {});

  return cars;
};
