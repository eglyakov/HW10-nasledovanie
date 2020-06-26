// let Transpor = function() {

//     let engine = false;

//     this.engineOn = function() {
//         engine = true;
//     };

//     this.engineOff = function() {
//         engine = false;
//     };

//     this.getEngineStatus = function() {
//         return engine;
//     };
// };


// let Car = function(model) {
//     Transpor.apply(this, arguments);

//     let engine = false,
//         speed = 0,
//         distance = 0,
//         time = 0;

//     this.setSpeed = function() {
//         if(engine == true) speed = +prompt('Введите среднюю скорость (км/ч)');
//     };

//     this.setDistance = function() {
//         distance = +prompt('Введите пройденное растояние (км)')
//     };

//     this.calcTime = function() {
//         time = Math.round((distance / speed) * 10) / 10;      
//     };

//     this.showInfo = function() {
//         alert(
//             'Марка автомобиля: ' + model + '\n' +
//             distance + ' км со средней скоростью ' + speed + ' км/ч вы проедете за ' + time + ' ч'
//         );
//     };
// };

// let car = new Car('BMW');

// car.engineOn();
// car.setSpeed();
// // car.setDistance();
// // car.calcTime();
// // car.showInfo();

let Car = function() {

    this.setModel = function() {
        this.model = prompt('Введите марку автомобиля');
    };

    this.trip = function() {
        this.transmis = prompt('Какую передачу включить: D, R, N ?');

        if (this.transmis == 'D' || this.transmis == 'd') {
            this.speed = +prompt('Введите скорость (км/ч)');
            this.time = +prompt('Введите время в пути (ч)');
        } else if (this.transmis == 'N' || this.transmis == 'n') {
            this.speed = 0;
            this.time = 0;
        } else if (this.transmis == 'R' || this.transmis == 'r') {
            this.speed = +prompt('Введите скорость заднего хода (км/ч)');
            this.time = +prompt('Введите время в пути (ч)');
        } else {
            let repeat = confirm('Это не космический корабль, такой передачи не существует.\nХотите пропустить этот шаг ?');
            if (!repeat) {
                this.trip();
            } else {
                this.speed = 0;
                this.time = 0;
            }
        }

        this.distance = this.speed * this.time;
    };

    this.show = function() {
        alert(
            'Марка автомобиля: ' + this.model +
            '\nПройденное растоение: ' + this.distance + ' км'
        );
    };
};



let Taxi = function() {
    Car.apply(this, arguments);


    this.setCountPeople = function() {
        this.people = +prompt('Введите количество пассажиров в машине (от 1 до 7)') || 1;

        if(this.people > 7) {
            if(!confirm('К сажеленью в нашем такси нет лимузинов. \nХотите пропустить этот шаг?')) {
            this.setCountPeople();
            }
        }
        
    };

    this.coast = function() {
        this.price = 0.5;          
        this.money = this.price * this.distance;
    };

    this.show = function() {
        alert(
            'Марка автомобиля: ' + this.model +
            '\nВы проехали ' + this.distance + ' км за ' + this.time + ' ч' +
            '\nЦена поездки: ' + this.money + ' р' +
            '\nС человека по ' + this.money / this.people + ' р'
        );
    };
};

let taxi = new Taxi();

taxi.setModel();
taxi.trip();
taxi.setCountPeople();
taxi.coast();
taxi.show();

let Truck = function() {
    Car.apply(this, arguments);

    this.cargo = function() {
        this.massa = +prompt('Введите массу груза (тонна)');
    }

    this.trailer = function() {
        if(this.massa < 15) {
            this.massTruck = 'обычная фура';
        } else if(this.massa >= 15 && this.massa <= 100) {
            this.massTruck = 'тяжеловоз';
        }
        else {
            this.massTruck = 'тяжеловоз с сцепкой';
        }
    };

    this.point = function() {
        if(this.distance < 400) this.location = 'Беларусь';
        else if(this.distance >= 400 && this.distance <= 2500) this.location = 'Евразия';
        else this.location = 'далёкая точка Мира';
    };

    this.show = function() {
        alert(
            'Марка автомобиля: ' + this.model +
            '\nДля доставки вашего груза потребуется: ' + this.massTruck +
            '\nМесто доставки груза: ' + this.location + ' (' + this.distance  + 'км)'
        );
    };
};

let truck = new Truck();

truck.setModel();
truck.trip();
truck.cargo();
truck.trailer();
truck.point();
truck.show();

