const getNearbyPincodes = async (orderPincode) => {
  return [
    orderPincode,
    orderPincode + 1,
    orderPincode + 2,
    orderPincode + 3,
    orderPincode + 4
  ];
};
module.exports = { getNearbyPincodes };