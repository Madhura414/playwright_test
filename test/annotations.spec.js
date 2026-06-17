// annoations are used  to specific test with keyword  control the test execution based on the type of test like smoke, sanity, regression etc..
// test.only -> it will one only that test cases
//  test.skip - > it will skip the test case
// test.fixme -> it will mark the  test case as fixme it willl not execte the test case
// test.describe -> it will group the test cases
// test.describe.only -> it will execute only that group of test cases
// test.describe.skip -> it will skip the group of test cases

import { test, expect } from "@playwright/test";
// only
test.only("test1 with example", async ({ page }) => {
  console.log("this is my 1st test");
});
// skip
test.skip("test2 with example", async ({ page }) => {
  console.log("this is my 1st test");
});

test("test 3 ", async ({ page, browserName }) => {
  if (browserName === "firefox") {
    test.skip();
  }
});

// fixme : test is having some issues and bug and we are not able to fix it right now so we can mark that test case as fixme
test("test 4 ", async ({ page }) => {
  test.fixme();
  console.log("this is my 4th test");
});
