'use strict';
import ShowData from './showData';
let data = new ShowData();
export default class RenderForm
{

    constructor(container){
        this.container = container;
    }
    render(){
       this.clearContainer();
       var block = document.createElement('div');
       block.classList.add("show-time-block","false-block");
       var button = document.createElement('button');
       button.classList.add("button");
       button.innerText = "Показать время";
       var up_label = document.createElement('label');
       var down_label = document.createElement('label');
       up_label.classList.add("up-label", 'label');
       down_label.classList.add("down-label", 'label');
       var dateTime = data.getDate();
        var timer = setInterval(function () {
            dateTime = data.getDate();
            up_label.innerText = "Сегодня: "+ dateTime.day+" "+dateTime.month+" "+dateTime.yer;
            down_label.innerText = "Время: "+dateTime.hour+":"+dateTime.min+":"+dateTime.sec;
        },1000);
       button.addEventListener('click', function () {

            if(document.getElementsByClassName('false-block')[0]== null){
                block.classList.add("false-block");
                button.innerText = "Показать время";
            }else {
                block.className = "show-time-block";
                button.innerText = "Скрыть";
            }
       });
        block.appendChild(up_label);
        block.appendChild(down_label);
       this.container.appendChild(block);
       this.container.appendChild(button);
    }
    clearContainer(){
        if(this.container.length == 0 && this.container == undefined){
            throw new EventException("Container не найден");
        }
        this.container.innerHTML = '';
    }
};
