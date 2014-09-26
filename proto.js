var company = {
    directors: [],
    managers: [],
    cleaners: [],
    security: [],
    interns: [],
    fired: function (who, whom) {
        if (who instanceof Director && whom instanceof Manager) {
            serchAndDelete(company.managers, whom);
        } else if (who instanceof Director && whom instanceof Cleaner) {
            serchAndDelete(company.cleaners, whom);
        } else if (who instanceof Director && whom instanceof Security) {
            serchAndDelete(company.security, whom);
        } else if (who instanceof Director && whom instanceof Intern) {
            serchAndDelete(company.interns, whom);
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

//Функция, которая ищет и удаляет сотрудника внутри массива
function serchAndDelete(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (elem === arr[i]) {
            arr.splice(i, 1);
        }
    }
}

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
var Maksym = new Cleaner('Maksym', 'man', 30);
var Vladimir = new Cleaner('Vladimir', 'man', 45);
var Irina = new Cleaner('Irina', 'woman', 14);

company.hired(Petr);
company.hired(Maksym)
company.hired(Vladimir);
company.hired(Irina)
console.log(company.cleaners);
company.fired(Stepa, Irina);
console.log(company.cleaners);

//Создаем личный метод
if (typeof HTMLElement.prototype.myMethod !== 'function') {
    HTMLElement.prototype.myMethod = function () {
        console.log(this.innerHTML + ", " + this.previousElementSibling.innerHTML + ", " + this.nextElementSibling.innerHTML);
    };
}