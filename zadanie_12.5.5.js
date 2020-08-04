class ElectricalAppliance {
    constructor(nutrition, weight, currentStrength, name, plugIn) {
        this.nutrition = nutrition;
        this.weight = weight;
        this.currentStrength = currentStrength;
        this.name = name;
        this.plugIn = plugIn;
    };

    getPower(nutrition, currentstrength) {
        result = nutrition * currentstrength;
        console.log(`Потребляемая мощность ${result} Вт.`)
    };

    checkPower(plugIn) {
        if (plugIn === 'on') {
            console.log('Прибор включен в розетку.');
        } else {
            console.log('Прибор отключен от розетки.');
        }
    };
};

class PortableElectronics extends ElectricalAppliance {
    constructor(nutrition, weight, currentStrength, name, plugIn, turnOn){
        super(nutrition, weight, currentStrength, name, plugIn);
        this.type = 'laptop';
        this.turnOn = turnOn;
    };

    getTurnOn(turnOn) {
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

};


class Light extends ElectricalAppliance{
    constructor(nutrition, weight, currentStrength, name, plugIn, seconds) {
        super(nutrition, weight, currentStrength, name, plugIn);
        this.timer = seconds;
    };

    getTimerOff(seconds) {
        let timerId = setInterval(function() {
            console.log(seconds);
            if (seconds == 0) {
                clearInterval(timerId);
            }
            seconds--;
        }, 1000);
    };
};

const electricLamp = new Light(220, 30, 0.18, 'Osram', 'off', 5)
const laptop = new PortableElectronics(220, 2000, 2, 'Macbook', 'on', 'off');

console.log(electricLamp.getTimerOff(5));
console.log(laptop.getTurnOn('off'));
console.log(laptop.getPower(220, 2));
console.log(electricLamp.getPower(220, 0.18));
console.log(laptop.checkPower('on'));
console.log(electricLamp.checkPower('off'));








