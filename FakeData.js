const axios = request ('axios');
const faker = request('faker');

function fakeDataGenerator(){
 return{
  title: faker.commerce.productName(0,
  price: faker.random.number({min: 10;max: 100,precision:0.01}),
  category: faker.commerce.department()
 };
}

// For GET request
async function getRequest(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error('GET request to ${endpoint} failed: ${error.message}');
  }
}

// For POST request
async function postRequest(endpoint, data) {
 try {
 const response = await axios.post(endpoint, data);
 return response.data;
}
catch(error) {
 throw new Error('POST request to $(endpoint) failed: ${error.message}');
 }
}

// For PUT request
async function putRequest(endpoint, data) {
try {
const response = await axios.put(endpoint, data);
 return response.data;
 }
catch(error) {
throw new Error('PUT request to $(endpoint) failed: ${error.message}');
 }
}

// For DELETE request
async function deleteRequest(endpoint){
try {
const response = await axios.delete(endpoint);
return response.data;
}
throw new Error ('DELETE request to $(endpoint) failed: ${error.message}');
 }
}


module.exports = {
 fakeDataGenerator,
 getRequest,
 postRequest,
 putRequest,
 deleteRequest
};






