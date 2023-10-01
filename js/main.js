const url = 'https://reqres.in/api/users?page=2'

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let dataArray = data.data
    for (let i=0; i<dataArray.length; i++){
        let array_data = dataArray[i]; //Получение данных из массива
        let str = JSON.stringify(array_data); //Преобразование массива в строку

        let p_tag = document.createElement('p'); //Создание тега p
        let bodyElement = document.querySelector('body'); //Нахождение HTMLelement`а body
        p_tag.textContent = `${str}`; //Вставка строки
        bodyElement.appendChild(p_tag) //Присвоение к body элементу, тега p
    }
  }).catch(function(error) {
    console.log('Request failed', error);
  });