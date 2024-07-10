const API_URL = 'https://mst-store-nodejs.onrender.com/v1/users';

async function httpAddUser(user) {
  try{
    return await fetch(API_URL , {
      method:"post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
  }
  catch(err){
    return{
      ok: false,
    }
  }
}

module.exports = {
  httpAddUser
}