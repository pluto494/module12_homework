class ElectricalAppliance {
    constructor(nutrition, weight, currentStrength, name, plugIn) {
        this.nutrition = nutrition;
        this.weight = weight;
        this.currentStrength = currentStrength;
        this.name = name;
        this.plugIn = plugIn;
    };

    getPower() {
        let result = this.nutrition * this.currentStrength;
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

electricLamp.getTimerOff(5);
laptop.getTurnOn('off');
laptop.getPower();
electricLamp.getPower();
laptop.checkPower('on');
electricLamp.checkPower('off');

// Здесь в коде присутствует та же проблема, что в предыдущем задании (переменная, объявленная без ключевого слова). Только теперь, поскольку внутри классов весь код по умолчанию выполняется в строгом режиме (strict mode), эта проблема вызывает ошибку. 
// Также есть вопросы к методу getPower класса ElectricalAppliance. По логике он должен рассчитывать мощность исходя из параметров, которые до этого уже были заданы в экземпляре класса (nutrition, currentStrength), но метод не использует уже заданные параметры, а вместо этого требует задать их ещё раз, что не очень удобно и в перспективе может привести к путанице и ошибкам. Исправила код метода на более правильный вариант.