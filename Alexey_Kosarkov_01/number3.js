'use strict';
class Human
{   
    constructor(name, age, dateOfBirth){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }
    
     displayInfo(){
        return {
            name:this.name,
            age:this.age,
            dateOfBirth:this.dateOfBirth
        };
    }
}

class Employee extends Human
{
    constructor(name, age, dateOfBirth, solary = 0, departement = ""){
        super(name, age, dateOfBirth);
        this.solary = solary;
        this.departament = departement;
    }
    
     displayInfo(){
        let humanInfo = super.displayInfo();
        humanInfo.solary = this.solary;
        humanInfo.departament = this.departament;
        return humanInfo;
    }
    //вывод не полной инормации
    get infor(){
        return {
            name: this.name,
            age: this.age,
            departament: this.departament,
        };
    }
}

class Menager extends Employee
{
    constructor(name = "", age = 0, dateOfBirth = "", solary = 0, deportament = ""){

        super(name, age,dateOfBirth,solary,deportament);
        this.devlopers = [];   
        this.id_devloper = 0;
    }
    //Добавление нового разработчика
    addDevloper(devloper = {}){
        if(Object.keys(devloper).length != 0){
            this.id_devloper += 1;
            if(JSON.stringify(devloper.menager) != JSON.stringify(this)){
                devloper.setMenager(this);
            }
            devloper.id = this.id_devloper;
            this.devlopers.unshift(devloper);
            console.log(devloper);
            console.log(this.devlopers);
        }  
    }
    //Удаление разработчика по айди 
    removeDevloper(id = 0){
        id = (id == 0) ? this.id_devloper : id; 
        this.devlopers.forEach(function(dev, i, mass){
            if(id == dev.id){
               delete dev.manager;
               mass.splice(i, 1); 
            }
            if(i == (mass.length-1)){
                console.log("Разработчик не найден!");
            }
        });
    }
    //Вывод всех разработчиков в кольсоль
    showDevlopers(){
        this.devlopers.forEach(function(dev, i){
            console.log(dev);
        });
    }
    //Отдача разрабодчика по id , по умалчанию отдает последнего
     getDevloper(id = 0){
        id = (id == 0) ? this.id_devloper : id; 
/*
        this.devlopers.forEach(function(dev, i){
            if(id == dev.id){
                return dev;
            }
            console.log(i);
            if(i == (this.length)){
               console.log("Разработчик не найден!"); 
                return null;
            }
        });
*/
        var iter = 1;
        for(var dev in this.devlopers){
            if(id == this.devlopers[dev].id){
                return this.devlopers[dev];
            }
            if(iter == (this.devlopers.length)){
               console.log("Разработчик не найден!"); 
                return null;
            }
        }
    }
}
class Devloper extends Employee
{
    
    constructor(name = "", age = 0, dateOfBirth = "", solary = 0, deportament = ""){
        super(name, age,dateOfBirth,solary,deportament);
        this.menager = {};
        this.id = 0;
    }
    //отдача менаджера
     get getMenager(){
        return this.menager;
    }
    //установка нового менаджера
     setMenager(menager = {})
    {
        if((Object.keys(menager).length != 0)){
            if(Object.keys(this.menager).length == 0){
                //добавление разработчика к менаджеру и менаджера к разработчику
                this.menager = menager;
                menager.addDevloper(this); 
            }else{
                //Удаление старого менеджера и разработчика от менаджера
                this.menager.removeDevloper(this.id);
                this.menager = menager;
                menager.addDevloper(this);
            }
        }
    }
}