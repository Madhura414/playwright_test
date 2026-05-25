import {test,expect} from '@playwright/test';

test.beforeAll (async()=>{
     console.log("this is beforeAll hook...");
})
test.afterAll(async()=>{
     console.log("this is AfterAll hook...");
})

test.beforeEach (async()=>{
     console.log("this is beforeEach hook...");
})
test.afterEach(async()=>{
     console.log("this is afterEach hook...");
})
test.describe("Grouping1 test ", ()=>{
    test("TEST1", async({page})=>{})
    console.log("this is TEST1...");

test("TEST2", async({page})=>{})
    console.log("this is TEST2...");
})

test.describe.only("Grouping2 test ", ()=>{

    test("TEST3", async({page})=>{})
    console.log("this is TEST3...");

    test("TEST4", async({page})=>{})
    console.log("this is TEST4...");
    
})