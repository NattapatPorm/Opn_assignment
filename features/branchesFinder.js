import calculateDistance from "../utils/calculateDistance";
import getMinValue from "../utils/getMinValue";

function branchesFinder(branchs, customer) {
  const { amount: customerAmount, location: customerLocation } = customer;
  let deliverMultipleBranches = false;
  let rememberResult = [];

  for (let [key, branch] of branchs.entries()) {
    const { name, currentStock } = branch;
    const branchEnoughStock = branch.currentStock > customerAmount;

    if (branchEnoughStock) {
      rememberResult.push({
        ...calculateDistance(branch.location, customerLocation),
        key,
        name,
        currentStock,
      });
    }
  }

  const haveRememberResult = rememberResult.length > 0;

  if (haveRememberResult && !deliverMultipleBranches) {
    const { key: indexBranch, result: deliveryCost } =
      getMinValue(rememberResult);
    const resultBranch = [];
    const { name, location } = branchs[indexBranch];
    resultBranch.push({ name, location, deliveryCost, amount: customerAmount });

    return resultBranch;
  }

  if (!haveRememberResult) {
    for (let [key, branch] of branchs.entries()) {
      const { name, currentStock } = branch;
      rememberResult.push({
        ...calculateDistance(branch.location, customerLocation),
        key,
        name,
        currentStock,
      });

      deliverMultipleBranches = true;
    }
  }

  if (deliverMultipleBranches) {
    let totalAmount = customerAmount;
    const resultBranch = [];

    while (totalAmount > 0) {
      const { key: indexBranch, result: deliveryCost } =
        getMinValue(rememberResult);
      const { name, location, currentStock } = branchs[indexBranch];
      const amount = totalAmount >= currentStock ? currentStock : totalAmount;

      totalAmount -= currentStock;
      resultBranch.push({
        name,
        location,
        deliveryCost,
        amount,
      });

      rememberResult = rememberResult.filter(
        (value) => value.key !== indexBranch
      );

      const overStockLimit = rememberResult.length <= 0;

      if (overStockLimit) {
        return [];
      }
    }

    return resultBranch;
  }
}

export default branchesFinder;
