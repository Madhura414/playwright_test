import {test ,expect}  from '@playwright/test';
  test ('launching browser', async ({page})=>{
    page.on('request', request => {
   console.log(request.url());
});

page.on('response', response => {
   console.log(response.status());
})});