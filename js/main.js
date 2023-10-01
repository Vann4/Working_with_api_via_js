const url = 'https://reqres.in/api/users?page=2'

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let dataArray = data.data
    for (let i=0; i<dataArray.length; i++){
        let id = dataArray[i];
        console.log('Request succeeded with JSON response', id);
    }
  }).catch(function(error) {
    console.log('Request failed', error);
  });