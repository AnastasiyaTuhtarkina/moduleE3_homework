//создаем массив для хранения всех приборов
allAplications = [];

// создаем родительский класс
class ElectricalAppliance {
    constructor(name, power, room) {
        this.name = name;
        this.power = power;
        this.turnOnOff = false;
        this.room = room;
        allAplications.push(this);
    }
    // методы для включения/выключения прибора
    turnOn() {
        this.turnOnOff = true;
        console.log(`Прибор ${this.name} включен в ${this.room}`);
    }
    turnOff() {
        this.turnOnOff = false;
        console.log(`Прибор ${this.name} выключен в ${this.room}`);
    }
}    
    
   

// Примеры создания приборов
class LighingFixture extends ElectricalAppliance{
    constructor(name, power, room, brightness) {
        super(name, power, room);
        this.brightness = brightness;
        this.getBrightness = function () {
            console.log(`Яркость прибора ${this.name}: ${this.brightness}`);
        };
    }
}

LighingFixture.prototype = Object.create(ElectricalAppliance.prototype);

class HouseholdAppliance extends ElectricalAppliance {
    constructor(name, power, room, size, color) {
        super(name, power, room);
        this.size = size;
        this.color = color;
    }
}

HouseholdAppliance.prototype = Object.create(ElectricalAppliance.prototype);

// функция вычисления общей мощности всех приборов
function totalPower(){
    let total = 0;
    allAplications.forEach(apliance => {
        if(apliance.turnOnOff){
            total += apliance.power;
        }
    });
    return total;
}

// Создание экземпляров приборов
const vacuumCleaner = new ElectricalAppliance('Пылесос', 400, 'Комната 3')
const lamp = new LighingFixture('Лампа', 100, 'Комната 1', 'тусклая');
const tv = new HouseholdAppliance('Телевизор', 2000, 'Комната 2', 'большой', 'черный');
const fridge = new HouseholdAppliance('Холодильник', 1500, 'Комната 3', 'маленький', 'белый');
const chandelier = new LighingFixture('Люстра', 600, 'Комната 2', 'яркая');

// Включение/выключение приборов
vacuumCleaner.turnOn();
lamp.turnOn();
tv.turnOff();
fridge.turnOn();
chandelier.turnOn();

// Вывод общей мощности всех приборов
console.log(`Общая мощность всех приборов: ${totalPower(allAplications)} Вт`);

// Вывод информации о всех приборах
console.log('Все приборы:', allAplications);

lamp.getBrightness();