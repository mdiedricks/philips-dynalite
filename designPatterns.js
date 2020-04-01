//  Module design pattern

export const myFunctions = {
    createLight(lightName){
        return lightName;
    },
    deleteLight(lightName){
        return null;
    }
}

//  Factory design pattern

const lightFactory = {
    create(lightName, colour, builderName){
        const builder = new Builder(builderName)
        const light = new Light(lightName, colour, builder)

        return light
    }
}

//  Observer design pattern
//  promotes loose coupling

class Light {
    constructor(observable, name, builder){
        this.observable = observable;
        this.name = name;
        this.builder = builder;

        this.observable.publish('light-created', {
            name,
            builder
        })
    }
}

class LightStore {
    constructor(observable){  //function
        this.observable = observable //bind this
        this.lights = [] // bind this to empty array

        this.observable.subscribe('light-created', this.addLight.bind(this))
    }
    addLight(light){
        this.lights.push(light)
    }
}

const observable = new Observable()
const lightStore = new LightStore(observable)
const light = new Light(observable, 'My new Light', 'Michael')

lightStore.lights


// Facade design pattern
