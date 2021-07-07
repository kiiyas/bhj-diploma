//Класс Entity - базовый для взаимодействия с сервером, от которого будут наследоваться классы Account и Transaction.
//Базовый класс для счетов, пользователей и расходов/доходов
//Имеет свойство URL, равно пустой строке.

class Entity {
  static URL = '';
  
  //Запрашивает с сервера список данных. 
  //Это могут быть счета или доходы/расходы (в зависимости от того, что наследуется от Entity) 
  static list(data, callback) {
    createRequest({
      data,      
      url: this.URL,
      method: 'GET',
      responseType: 'json',
      callback
    })
  };

 
  //Создаёт счёт или доход/расход с помощью запроса на сервер. (в зависимости от того, что наследуется от Entity)
  static create(data, callback) {
    createRequest({
      data,
      url: this.URL,
      method: 'PUT',
      responseType: 'json',
      callback
    });
  };

  //Удаляет информацию о счёте или доходе/расходе (в зависимости от того, что наследуется от Entity) 
  static remove(data, callback ) {
    createRequest({
      data,
      url: this.URL,
      method: 'DELETE',
      responseType: 'json',
      callback
    })
  }
}
