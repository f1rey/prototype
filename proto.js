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
function Employee(name, sex, age) {

    this.name = name;
    this.sex = sex;
    this.age = age

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

Employee.prototype.resign = function () {
    console.log('Сотрудник ' + this.name + ' уволился по собственному желанию');
};

Employee.prototype.getSalary = function () {
    console.log('Сотрудник ' + this.name + ' получил зарплату');
};

//функция наследования через провежуточный класс
function inheritBest(Child, Parent) {
    var c = Child.prototype.constructor;
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = c;
}

//Создаем конструктор Начальник, который полностью наследуем от Employee и добавляем свои специфические свойста
function Boss(name, sex, age) {
    Employee.apply(this, arguments);
    this.fire = function fire() {
        console.log(this.name + ' уволил сотрудника')
    };
    this.ordering = function ordering() {
        console.log(this.name + ' отдал приказ')
    }
}
Boss.prototype = new Employee();

//Создали класс Директор, который полностью наследуем от класса Boss
function Director(name, sex, age) {
    Boss.apply(this, arguments);
}
Director.prototype = new Boss();

//Создпли клас Менеджер, который полностью наследуем от класса Boss
function Manager(name, sex, age) {
    Boss.apply(this, arguments);
}
Manager.prototype = new Boss();

//Создали класс Уборщика, который полностью наследуется от Employee
function Cleaner(name, sex, age) {
    Employee.apply(this, arguments);
    this.clean = function clean() {
        console.log('Работник ' + this.name + ' начал убирать')
    }
}
Cleaner.prototype = new Employee();

//Создали класс Охранник, который полностью наследуем от Employee
function Security(name, sex, age) {
    Employee.apply(this, arguments);
    this.guard = function guard() {
        console.log('Работник ' + this.name + ' охраняет')
    }
}
Security.prototype = new Employee();
//Создали новый экземпляр класса
var Petr = new Security('Petr', 'man', 45);
Petr.guard();
console.log(Petr);
Petr.resign();