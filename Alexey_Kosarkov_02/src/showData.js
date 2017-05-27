'use strict';

export default class ShowData
{
    constructor(){
        this.date = new Date();
    }
    getDate(){
        this.date = new Date();
        var month = this.date.getMonth()+1;
        var min = this.switchTime(this.date.getMinutes());
        var sec = this.switchTime(this.date.getSeconds());
        var hour = this.switchTime(this.date.getHours());

        switch (month){
            case 1: month = "Января"; break;
            case 2: month = "Февраля"; break;
            case 3: month = "Марта"; break;
            case 4: month = "Апреля"; break;
            case 5: month = "Мая"; break;
            case 6: month = "Июня"; break;
            case 7: month = "Июля"; break;
            case 8: month = "Августа"; break;
            case 9: month = "Сентября"; break;
            case 10: month = "Октября"; break;
            case 11: month = "Ноября"; break;
            case 12: month = "Декрбря"; break;
        }
        return  {
            day:this.date.getDate(),
            yer:this.date.getFullYear(),
            min:min,
            hour:hour,
            sec:sec,
            month:month,
        };
    }
    switchTime(time){
        switch (time){
            case 0: return "00";
            case 1: return "01";
            case 2: return "02";
            case 3: return "03";
            case 4: return "04";
            case 5: return "05";
            case 6: return "06";
            case 7: return "07";
            case 8: return "08";
            case 9: return "09";
            default:return time;
        }
    }
};
