class Person {
    constructor(name, height, age, gender) {
        this.name = name;
        this.height = height;
        this.age = age;
        this.gender = gender;
    }

    name (){
        return this.name;
    }

    height (){
        return this.height;
    }

    age (){
        return this.age;
    }

    gender (){
        return this.gender;
    }
}

export default Person;