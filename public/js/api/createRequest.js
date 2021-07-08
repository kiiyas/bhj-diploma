//доработка XHR, запросы к серверу и получение ответов
//Основная функция для совершения запросов на сервер.


const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest,
  formData = new FormData;
  xhr.responseType = 'json';

  if(options.method == 'GET') {

    if (options.data && options.data !== undefined) {        
      for (let key in options.data) {
        options.url = options.url + '?' + `${key}=${options.data[key]}`
      }        
    }

  } else {
    for (let key in options.data) {
      formData.append(`${key}`, `${options.data[key]}`);
    }            
  } 

  try {
    xhr.open(options.method, options.url);
    options.method == 'GET' ? xhr.send() : xhr.send(formData);
  } catch (err) {
    console.error(err);
  }

  xhr.onload = () => options.callback(null, xhr.response);
  
};

//В случае успешного выполнения кода, необходимо вызвать функцию, заданную в callback и передать туда данные. 
//при успешном выполнении err = null, response содержит данные ответа:
// callback: ( err, response ) => {
//   console.log( err ); // null
//   console.log( response ); // ответ
// }