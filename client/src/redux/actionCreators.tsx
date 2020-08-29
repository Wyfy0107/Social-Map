type testType = {
  type: string;
};

export const test = (): testType => {
  return { type: "TEST" };
};

export type actionTypes = testType;
