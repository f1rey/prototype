var company = {
    directors: [],
    managers: [],
    cleaners: [],
    security: [],
    interns: [],
    fired: function (who, whom) {
        if (who instanceof Director && whom instanceof Manager) {
            company.managers.pop(whom)
        } else if (who instanceof Director && whom instanceof Cleaner) {
            company.cleaners.pop(whom)
        } else if (who instanceof Director && whom instanceof Security) {
            company.security.pop(whom)
        } else if (who instanceof Director && whom instanceof Intern) {
            company.interns.pop(whom)
        } else if (who instanceof Director && whom instanceof Intern) {
            company.interns.pop(whom)
        }
    },
    hired: function (whom) {
        if (whom instanceof Director) {
            company.directors.push(whom)
        } else if (whom instanceof Manager) {
            company.managers.push(whom)
        } else if (whom instanceof Cleaner) {
            company.cleaners.push(whom)
        } else if (whom instanceof Security) {
            company.security.push(whom)
        } else if (whom instanceof Intern) {
            company.interns.push(whom)
        }
    }
};
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

//Создали класс Стажер, который наследуем от Employee и переопределяем метод получать зарплату
function Intern(name, sex, age) {
    Employee.apply(this, arguments);
}
Intern.prototype = new Employee();
Intern.prototype.getSalary = function () {
    console.log('Стажеры не получают зарплату');
};
Intern.prototype.takeVacation = function () {
    console.log('Стажеры не ходят в отпуск');
};

//Создали новый экземпляр класса
var Petr = new Cleaner('Petr', 'man', 45);
var Stepa = new Director('Stepa', 'man', 45);

company.hired(Petr);
console.log(company.cleaners);
company.fired(Stepa, Petr);
console.log(company.cleaners);


//Создаем личный метод
if (typeof HTMLElement.prototype.myMethod !== 'function') {
    HTMLElement.prototype.myMethod = function () {
        console.log(this.innerHTML + ", " + this.previousElementSibling.innerHTML + ", " + this.nextElementSibling.innerHTML);
    };
}