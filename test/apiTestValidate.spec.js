import {test ,expect ,request } from  "@playwright/test";
test ("API Test validate", async ({request})=>{
    // make a GET request to the API endpoint
    const response = await request.get("https://jsonplaceholder.typicode.com/users/1");
    // validate the status code  
     expect(response.status()).toBe(200);

    //convert response to json : convert the response json format to javascript object because we need to validate the response body
    const responseBody = await response.json();
     console.log ("??respose " , responseBody);
      
     // validate the response body 
      expect (responseBody.id ).toBe(1);
      // toBeNull() : to check the value is null or not
      expect (responseBody.name).not.toBeNull();
      // toContain() : to check the value is present in the string or not
      expect (responseBody.email).toContain("@");

    

})