import  { test, expect, request } from "@playwright/test";

const BASE_URL = "https://jsonplaceholder.typicode.com";

test("GET POST PUT DELETE - All in One Request Flow", async () => {
  const apiContext = await request.newContext();

  // ========================
  // 1. GET - Fetch a user
  // ========================
  const getResponse = await apiContext.get(`${BASE_URL}/users/1`);
  const getBody = await getResponse.json();

  console.log("??!GET Response:", getBody);
  expect(getResponse.status()).toBe(200);
  expect(getBody).toHaveProperty("id", 1);
  expect(getBody).toHaveProperty("name");

  // ========================
  // 2. POST - Create a user
  // ========================
  const postResponse = await apiContext.post(`${BASE_URL}/users`, {
    data: {
      name: "John Doe",
      username: "johndoe",
      email: "john@example.com",
    },
  });
  const postBody = await postResponse.json();

  console.log("??2", postBody);
  expect(postResponse.status()).toBe(201);
  expect(postBody).toHaveProperty("id");
  expect(postBody.name).toBe("John Doe");

  // ========================
  // 3. PUT - Update a user
  // ========================
  const putResponse = await apiContext.put(`${BASE_URL}/users/1`, {
    data: {
      name: "Jane Doe Updated",
      username: "janedoe",
      email: "jane@example.com",
    },
  });
  const putBody = await putResponse.json();

  console.log("?? 3PUT Response:", putBody);
  expect(putResponse.status()).toBe(200);
  expect(putBody.name).toBe("Jane Doe Updated");

  // ========================
  // 4. DELETE - Delete a user
  // ========================
  const deleteResponse = await apiContext.delete(`${BASE_URL}/users/1`);

  console.log("??4 DELETE Status:", deleteResponse.status());
  expect(deleteResponse.status()).toBe(200);

  console.log("✅ All CRUD operations completed successfully!");
});