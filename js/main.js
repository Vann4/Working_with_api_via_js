const url = 'https://reqres.in/api/users?page=2'

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let dataArray = data.data
    for (let i=0; i<dataArray.length; i++){
        let array_data = dataArray[i]; //Получение данных из массива
//        let str = JSON.stringify(array_data); //Преобразование массива в строку
//
//        let p_tag = document.createElement('p'); //Создание тега p
//        let bodyElement = document.querySelector('body'); //Нахождение HTMLelement`а body
//        p_tag.textContent = `${str}`; //Вставка строки
//        bodyElement.appendChild(p_tag) //Присвоение к body элементу, тега p

        let tr_Element = document.createElement('tr');
        let table_Element = document.querySelector('table');
        tr_Element.innerHTML = `<td>${array_data.id}</td> <td>${array_data.email}</td> <td>${array_data.first_name}</td> <td>${array_data.last_name}</td> <td>${array_data.avatar}</td>`;
        table_Element.appendChild(tr_Element)
    }
  }).catch(function(error) {
    console.log('Request failed', error);
  });

//  function myFunc() {
//  //Для начала, вам нужно найти элемент, в который нужно вставить вашу разметку. Вданном случае таблицу с id='table'.
//  var table = document.getElementById('table');
////Тут выдерните ваше значение из locslStorage, я просто присвою 1.
//  var faucet1 = 1;
//  //Теперь создаем строку и присваиваем ее переменной.
//  var tr = document.createElement("tr");
//  if (faucet1 == 1) {
//
////добавляем разметку в созданную строку
//    tr.innerHTML = '<td>гег </td> <td> </td> <td> гег</td> <td> гег </td> <td> гег</td>';
//
////вставляем строку в таблицу
//    table.appendChild(tr);
//
//  } else {
//
//    console.log('error');
//
//  }
//
//};
//
//myFunc();