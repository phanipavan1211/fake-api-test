const{
 fakeDataGenerator,
 getRequest,
 postRequest,
 putRequest,
 deleteRequest
} = require('/.api');

describe ('API endpoint Tests', () = >{
    let productId;
 
    test('GET request to retrieve a record', async() =>{
    const response = await getRequest('https://fakestoreapi.com/products/1');
    expect(response).toHaveProperty('id');
    productId = response.id;
  });

    test ('POST request to create a record', async() =>{
    const response = await postRequest('https://fakestoreapi.com/products');
    expect(response).toHaveProperty('id');
    productId = response.id;
  });
   
    test ('PUT request to update a record', async() => {
    const response = await putRequest('https://fakestoreapi.com/products/$productId', data);
    expect(response).to HaveProperty('id', productId);
  });
  
    test ('DELETE request to remove a record', sync(=>) {
    const response = await deleteRequest(''https://fakestoreapi.com/products/$productId', data);
    expect(response).toHaveProperty('id', productId);
   });   
});