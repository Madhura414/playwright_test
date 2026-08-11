
// tag are used to categorize the test based on the type test like smoke,sanity,regression etc..
// command  to run test with tag  npx playwright test --grep @smoke
//npx playwright test test/tagTests.spec.js --project=chromium --grep "@sanity


test("test with @sanity", async ({ page }) => {
  console.log("this is my first2");
});

test("test with @regression", async ({ page }) => {
  console.log("this is my first3");
});

test("test with @smoke@regression", async ({ page }) => {
  console.log("this is my first4 t");
});
