import HttpClient from "../HttpClient";

test("basic usage", async () => {
  const responseData = await HttpClient.create().get("/api/v1/updateds.json");
  expect(responseData).not.toBeNull();
});

test("if endpoint returns error, data should be null", async () => {
  const responseData = await HttpClient.create().get("/invalid/endpoint");
  expect(responseData).toBeNull();
});
