
const calculateBmi = (heightFeet, heightInches, weight) => {
  if (typeof heightFeet === 'string' || typeof heightInches === 'string' || typeof weight === 'string') {
    throw new Error('Height and weight must be valid');
  }
  if (heightFeet < 0 || heightInches < 0 || weight < 0) {
    throw new Error('Height and weight must be non-negative');
  }
  if (heightFeet === 0 && heightInches === 0 || weight === 0) {
    throw new Error('Height and weight must be valid');
  }

  const totalHeightInches = heightFeet * 12 + heightInches;
  const weightKg = weight * 0.45;
  const heightCm = totalHeightInches * 0.025;

  let bmi = weightKg / (heightCm ** 2);
  bmi = parseFloat(bmi.toFixed(1));

  let category;

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal weight';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  return {bmi, category};
};


describe('calculateBmi', () => {
  test('normal weight 1 (bmi 18.5)', () => {
    const { bmi, category } = calculateBmi(5, 2, 98.75);
    expect(category).toBe('Normal weight');
  });

  test('underweight 2 (bmi 18.4)', () => {
    const { bmi, category } = calculateBmi(5, 2, 98.22);
    expect(category).toBe('Underweight');
  });

  test('underweight 3 (bmi 17)', () => {
    const { bmi, category } = calculateBmi(5, 2, 90.75);
    expect(category).toBe('Underweight');
  });

  test('overweight 4 (bmi 25)', () => {
    const { bmi, category } = calculateBmi(6, 0, 180);
    expect(category).toBe('Overweight');
  });

  test('normal weight 5 (bmi 18.5)', () => {
    const { bmi, category } = calculateBmi(5, 2, 98.75);
    expect(category).toBe('Normal weight');
  });

  test('normal weight 6 (bmi 20)', () => {
    const { bmi, category } = calculateBmi(6, 0, 144);
    expect(category).toBe('Normal weight');
  });

  test('normal weight 7 (bmi 24.9)', () => {
    const { bmi, category } = calculateBmi(6, 0, 179.26);
    expect(category).toBe('Normal weight');
  });

  test('underweight 8 (bmi 18.4)', () => {
    const { bmi, category } = calculateBmi(5, 2, 98.22);
    expect(category).toBe('Underweight');
  });

  test('overweight 9 (bmi 25)', () => {
    const { bmi, category } = calculateBmi(6, 0, 180);
    expect(category).toBe('Overweight');
  });

  test('overweight 10 (bmi 27)', () => {
    const { bmi, category } = calculateBmi(5, 9, 181.11);
    expect(category).toBe('Overweight');
  });

  test('overweight 11 (bmi 29.9)', () => {
    const { bmi, category } = calculateBmi(6, 0, 215.26);
    expect(category).toBe('Overweight');
  });

  test('obese 12 (bmi 30)', () => {
    const { bmi, category } = calculateBmi(5, 10, 204.15);
    expect(category).toBe('Obese');
  });

  test('normal weight 13 (bmi 24.9)', () => {
    const { bmi, category } = calculateBmi(6, 0, 179.26);
    expect(category).toBe('Normal weight');
  });

  test('obese 14 (bmi 30)', () => {
    const { bmi, category } = calculateBmi(5, 10, 204.15);
    expect(category).toBe('Obese');
  });

  test('obese 15 (bmi 32)', () => {
    const { bmi, category } = calculateBmi(6, 0, 230.4);
    expect(category).toBe('Obese');
  });

});

