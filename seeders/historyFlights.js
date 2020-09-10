const mongoose = require('mongoose');

mongoose.connect(
    `mongodb+srv://igorg:ibmix4@cluster0.aev79.azure.mongodb.net/IBMiX4?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
);

const Schema = mongoose.Schema;

const pilot = Schema({
    firstName: { type: String },
    lastName: { type: String },
    patronymic: { type: String },
    email: { type: String },
    crewRole: { type: String },
    standingFromDate: { type: String },
    standingFromDateInRole: { type: String },
    reliabilityIndex: { type: String },
    rewardsAndPunishments: { type: String },
    phone: { type: String },
    password: { type: String },
    keyForNewPassword: { type: String },
    wishForm: { type: Array },
    arrWish: { type: Array }
});

const Pilot = mongoose.model('Pilot', pilot);

async function foo() {
    const pilotCollection = await Pilot.find()
    // const pilotCollection = await Pilot.findOne({ email: 'igordg30.07.19861@gmail.com' });

    for (let j = 0; j < pilotCollection.length; j++) {
        let arrWish = [];
        function randomInteger(min, max) {
            // случайное число от min до (max+1)
            let rand = min + Math.random() * (max + 1 - min);
            let longMonth = Math.floor(rand);

            for (let k = longMonth; k > 0; k--) {
                let obj = {}

                if (k === 1) {

                    obj.month = {
                        description: 'Октябрь',
                        date: 10
                    }
                } else if (k === 2) {
                    obj.month = {
                        description: 'Сентябрь',
                        date: 9
                    }
                } else if (k === 3) {
                    obj.month = {
                        description: 'Август',
                        date: 8
                    }
                } else if (k === 4) {
                    obj.month = {
                        description: 'Июль',
                        date: 7
                    }
                } else if (k === 5) {
                    obj.month = {
                        description: 'Июнь',
                        date: 6
                    }
                } else if (k === 6) {
                    obj.month = {
                        description: 'Май',
                        date: 5
                    }
                } else if (k === 7) {

                    obj.month = {
                        description: 'Апрель',
                        date: 4
                    }
                } else if (k === 8) {

                    obj.month = {
                        description: 'Март',
                        date: 3
                    }
                } else if (k === 9) {
                    obj.month = {
                        description: 'Февраль',
                        date: 2
                    }

                } else if (k === 10) {

                    obj.month = {
                        description: 'Январь',
                        date: 1
                    }
                } else if (k === 11) {
                    obj.month = {
                        description: 'Декабрь',
                        date: 12
                    }
                } else if (k === 12) {
                    obj.month = {
                        description: 'Ноябрь',
                        date: 11
                    }

                }


                for (let i = 0; i < 4; i++) {
                    if (i === 0) {
                        let random = Math.random()
                        if (random > 0.5) {
                            obj.longFly = 'Континентальные рейсы'
                        } else {
                            obj.longFly = 'Трансатлантические рейсы'
                        }
                    } else if (i === 1) {
                        let random = Math.random()
                        if (random > 0.5) {
                            obj.otherTime = 'Длительная смена'
                        } else {
                            obj.otherTime = 'Короткая смена'
                        }
                    } else if (i === 2) {
                        let random = Math.random()
                        if (random > 0.5) {
                            obj.timeFly = 'Хочу работать с переработками'
                        } else {
                            obj.timeFly = 'Переработки неприемлимы'
                        }
                    } else if (i === 3) {
                        let random = Math.random()
                        if (random < 0.2) {
                            obj.preferenceTimeFly = 'Утро(06: 00 - 12: 00)'
                        } else if (random > 0.2 && random < 0.4) {
                            obj.preferenceTimeFly = 'День(12: 00 - 17: 00)'
                        } else if (random > 0.4 && random < 0.7) {
                            obj.preferenceTimeFly = 'Вечер(17: 00 - 22: 00)'
                        } else if (random > 0.7 && random < 1) {
                            obj.preferenceTimeFly = 'Ночь(22: 00 - 06: 00)'
                        }
                    }

                }
                arrWish.push(obj)
            }
        }
        randomInteger(1, 12)
        pilotCollection[j].arrWish = arrWish
        await pilotCollection[j].save();
    }
}

// foo()