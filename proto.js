//var company = {
//    directors: [],
//    managers: [],
//    cleaners: [],
//    security: [],
//    interns: []
//    fire: function () {
//    
//}
//};

//Создали конструктор (базовый класс Сотрудник)
function Employee(config) {
    {
        this.name = config.name;
        this.sex = config.sex;
        this.age = config.age
    }
}
//Расширили свойсва базового класса
Employee.prototype.goToWork = function () {
    console.log('Сотрудник ' + this.name + ' пришел на работу');
};

Employee.prototype.goHome = function () {
    console.log('Сотрудник ' + this.name + ' пошел домой');
};

Employee.prototype.takeVacation = function () {
    console.log('Сотрудник ' + this.name + ' пошел в отпуск');
};

Employee.prototype.fire = function () {
    console.log('Сотрудник ' + this.name + ' уволился по собственному желанию');
};

Employee.prototype.getSalary = function () {
    console.log('Сотрудник ' + this.name + ' получил зарплату');
};
console.log(config);
//функция наследования через провежуточный класс
//function inheritBest(Child, Parent) {
//    var c = Child.prototype.constructor;
//    var F = function () {};
//    F.prototype = Parent.prototype;
//    Child.prototype = new F();
//    Child.prototype.constructor = c;
//}

//Создаем конструктор Начальник, который полностью наследуем от Employee
function Boss(config) {
    Employee.apply(this, arguments);
    this.fire = function Fire() {
        console.log(this.name + ' уволил сотрудника')
    };
    this.ordering = function Ordering() {
        console.log(this.name + ' отдал приказ')
    }
}
Boss.prototype = new Employee();

var Petr = new Boss({
    name: 'Petr',
    sex: 'man',
    age: 45
});

console.log(Petr);
//var Director = new Boss({
//    name: 'Vitaliy',
//    sex: 'man',
//    age: 46
//});

//Director.getSalary();
//console.log(Director)