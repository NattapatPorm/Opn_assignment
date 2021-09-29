function calculateDistance(branchLocation, customerLocation) {
  const [branchXAxis, branchYAxis] = branchLocation;
  const [customerXAxis, customerYAxis] = customerLocation;

  const xAxisResult = Math.abs(branchXAxis - customerXAxis);
  const yAxisResult = Math.abs(branchYAxis - customerYAxis);
  const noUTurn = xAxisResult === 0 || yAxisResult === 0;

  let result = 0;

  if (noUTurn) {
    result = xAxisResult + yAxisResult;
  } else {
    result = xAxisResult + yAxisResult + 1;
  }

  return { result };
}

export default calculateDistance;
