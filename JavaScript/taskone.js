function person(stuName){

    this.name=stuName;


this.sayHello=() => {
    console.log(`hello,my name is ${this.name}`);

};
}

const hari=new person("Hari");
hari.sayHello();
