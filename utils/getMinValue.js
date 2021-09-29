function getMinValue(arr) {
  let [min] = arr;

  for (let i = 1; i < arr.length; i++) {
    const sameDeliverCost =
      arr[i].result === min.result && arr[i].currentStock !== min.currentStock;
    const sameDeliverCostSameStock =
      arr[i].result === min.result && arr[i].currentStock === min.currentStock;

    if (arr[i].result < min.result) {
      min = arr[i];
    }

    if (sameDeliverCost) {
      return arr[i].currentStock > min.currentStock ? arr[i] : min;
    }

    if (sameDeliverCostSameStock) {
      return arr[i].name < min.name ? arr[i] : min;
    }
  }

  return min;
}

export default getMinValue;
