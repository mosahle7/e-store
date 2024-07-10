const API_URL = 'https://mst-store-nodejs.onrender.com/v1';

// export const fetcher = async (url) =>{
//     let responseObject={errorMessage: '',data: []};
//     try{
//         const response=await fetch(API_URL+url);
//         console.log(response);
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         const responseData= await response.json();
//         responseObject.errorMessage='';
//         responseObject.data=responseData;
//     }
//     catch(err){
//         console.log(err.message);
//         responseObject.errorMessage=err.message;
//     }
//     return responseObject;

//     // const response = await fetch(API_URL+url);
//     // return await response.json();
// };
const fetcher = async (url) => {
    try{
    const response = await fetch(API_URL + url);
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
    }
    catch(err){
        console.log(err.message);
    }
}
export const getProductById2 = id => {
    return fetcher('/products/product/'+ id);
}

export const getProductByCategory = catid => {
    return fetcher('/products/'+catid);
}

export const getProductsByQuery = query => {
    return fetcher('/products/search?q=' + query);
}

export const getCategories = () => {
    return fetcher('/categories')
}
// export 
// async function getProductById2(id) {
//     const response = await fetch(API_URL + '/product/' + id);
//     return await response.json();
// } 