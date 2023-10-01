const url = 'https://reqres.in/api/users?page=2'

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let dataArray = data.data
    for (let i=0; i<dataArray.length; i++){
        let array_data = dataArray[i]; //Получение данных из массива

        let tr_Element = document.createElement('tr');
        let table_Element = document.querySelector('table');
        tr_Element.innerHTML = `<td>${array_data.id}</td> <td>${array_data.email}</td> <td>${array_data.first_name}</td> <td>${array_data.last_name}</td> <td>${array_data.avatar}</td>`;
        table_Element.appendChild(tr_Element)
    }
  }).catch(function(error) {
    console.log('Request failed', error);
  });