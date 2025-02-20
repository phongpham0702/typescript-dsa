type Testcase = {
  params: Object;
  expected: any;
};

type TestFunction = (...args: any[]) => any;

export default function RunWithTestCases(
  func: TestFunction,
  testCases: Testcase[]
) {
  testCases.forEach(({ params, expected }, index: number) => {
    try {
      const result = func(...Object.values(params));
      const passed = JSON.stringify(result) === JSON.stringify(expected);

      console.log(
        `Test case ${index + 1}:`,
        passed
          ? "✅ Passed"
          : `❌ Failed (Expected: ${JSON.stringify(
              expected
            )}, Got: ${JSON.stringify(result)})`
      );
    } catch (error) {
      console.error(`❌ Test case ${index + 1} threw an error:`, error);
    } finally {
      console.log(`Parameters:`, params);
      console.log(`Expect:`, expected, "\n");
    }
  });
}
