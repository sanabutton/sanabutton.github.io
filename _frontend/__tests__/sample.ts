import Sample from "../Sample";

test("testing sample", () => {
  const message = Sample.message();
  expect(message).toBeDefined();
});
