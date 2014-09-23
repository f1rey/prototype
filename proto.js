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
    this.name = config.name;
    this.sex = config.sex;
    this.age = config.age
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
//функция наследования
function inheritBest(Child, Parent) {
    var c = Child.prototype.constructor;
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = c;
}

function Director() {}
inheritBest(Director, Employee);
var Petr = new Employee('Петр', 'мужчина', 24);
console.log(Petr);
Petr.goToWork();

var Masha = new Employee('Маша', 'девушка', 24);

Masha.goToWork();
Masha.goHome();
Masha.takeVacation();
Masha.fire();
Masha.getSalary();

console.log(Masha);

//это написана фигня
//function Boss (fire, accept) {
//    this.fire = fire;
//    this.accept = accept 
//};