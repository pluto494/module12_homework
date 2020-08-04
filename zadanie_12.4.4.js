//родительская функция
function ElectricalAppliance(nutrition, weight, currentStrength, name, plugIn) {
    this.nutrition = nutrition,
        this.weight = weight,
        this.currentStrength = currentStrength,
        this.name = name,
        this.plugIn = plugIn
};

// рассчет потребляемой мощности
ElectricalAppliance.prototype.getPower = function(nutrition, currentstrength) {
    result = nutrition * currentstrength;
    console.log(`Потребляемая мощность ${result} Вт.`)
};


// проверка подключения к розетке
ElectricalAppliance.prototype.checkPower = function(plugIn) {
    if (plugIn === 'on') {
        console.log('Прибор включен в розетку.');
    } else {
        console.log('Прибор отключен от розетки.');
    }
};


//
function PortableElectronics(turnOn) {
    this.type = 'laptop',
        this.turnOn = turnOn
}

PortableElectronics.prototype = new ElectricalAppliance();
//


//
function light (timer){
    this.timer = timer
};

light.prototype = new ElectricalAppliance();
//

//
const electricLamp = new light()
const laptop = new PortableElectronics();
//


//родительские методы
electricLamp.getPower(220, 0.18);
laptop.getPower(220, 2)
laptop.checkPower('on');
electricLamp.checkPower('off');
//

// метод ноутбука
PortableElectronics.prototype.getTurnOn = function(turnOn) {
    if (turnOn === 'on'){
        let password = prompt('Введите пароль: ');
        if (password === 'qwerty'){
            console.log('Добро пожаловать, Юлия!');
        } else {
            console.log('Попробуйте снова!');
        }
    } else {
        console.log('Включите компьютер!')
    }
};

laptop.getTurnOn('off')
//


// метод лампы
light.prototype.getTimerOff = function(seconds) {
    let timerId = setInterval(function() {
        console.log(seconds);
        if (seconds == 0) {
            clearInterval(timerId);
        }
        seconds--;
    }, 1000);
}

electricLamp.getTimerOff(5)
//
















