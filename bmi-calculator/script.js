const result = document.querySelector("#res");

const calculate = () => {
  let weightVal = parseFloat(document.querySelector("#weight").value);
  let heightVal = parseFloat(document.querySelector("#height").value);

  let bmi = ((weightVal * 10000) / (heightVal * heightVal)).toFixed(2);

  if (
    isNaN(weightVal) ||
    isNaN(heightVal) ||
    weightVal <= 0 ||
    heightVal <= 0
  ) {
    result.innerHTML = `Enter valid values.`;
  } else {
    result.innerHTML = `BMI is: ${bmi}`;
  }
};
