//Класс TransactionsWidget отвечает за открытие всплывающих окон для
//создания нового дохода или расхода
class TransactionsWidget {
  //Устанавливает полученный элемент в свойство element.
  //Если переданный элемент не существует, необходимо выкинуть ошибку.
  constructor( element ) {
    if (!element) throw new Error('No data!');

    this.element = element;
    this.registerEvents();

  }
  
  //Регистрирует обработчики нажатия на кнопки «Новый доход» и «Новый расход».
  //При нажатии вызывает Modal.open() для экземпляра окна
  registerEvents() {
    //this.element.getElementsByClassName('create-income-button')[0]
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      const createIncomeButton = e.target.closest('.create-income-button');
      const createExpenseButton = e.target.closest('.create-expense-button');
      const accounts = [...document.querySelectorAll('.account')].length;

      if (createIncomeButton && (accounts !== 0)) {
        App.getModal('newIncome').open();
      }

      if (createExpenseButton && (accounts !== 0)) {
        App.getModal('newExpense').open();
      }
    });
  }
}
