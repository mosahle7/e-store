const baseURL='https://storedatajson.onrender.com';
// export const fetcher = async (url) =>{
//     let responseObject={errorMessage: '',data: []};
//     try{
//         const response=await fetch(baseURL+url);
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
// };
const fetcher = async (url) => {
    try{
    const response = await fetch(baseURL + url);
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

export const getCategories = () =>{
    return fetcher('/categories');
}
export const getProducts = id => {
    return fetcher('/products?catid='+ id);
}

// export const getProductById = id =>{
//     return fetcher('/products/'+ id);
// }

export const getProductsByQuery = query => {
    return fetcher('/products?q=' + query);
}
