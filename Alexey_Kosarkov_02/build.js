/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__showData__ = __webpack_require__(2);


let data = new __WEBPACK_IMPORTED_MODULE_0__showData__["a" /* default */]();
class RenderForm
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
        var timer ;
       button.addEventListener('click', function () {

            if(document.getElementsByClassName('false-block')[0]== null){
                block.classList.add("false-block");
                button.innerText = "Показать время";
                if(timer != undefined){
                    clearInterval(timer);
                }
            }else {
                block.className = "show-time-block";
                button.innerText = "Скрыть";
                timer = setInterval(function () {
                    dateTime = data.getDate();
                    up_label.innerText = "Сегодня: "+ dateTime.day+" "+dateTime.month+" "+dateTime.yer;
                    down_label.innerText = "Время: "+dateTime.hour+":"+dateTime.min+":"+dateTime.sec;
                },1000);
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderForm;
;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderForm__ = __webpack_require__(0);



const container = document.getElementById('app');
let render = new __WEBPACK_IMPORTED_MODULE_0__renderForm__["a" /* default */](container);
render.render();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class ShowData
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShowData;
;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTk5OTIwMDBjZDYzMmY2ZTZiMTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3dEYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUNuREE7OztBQUdBO0FBQ0E7QUFDQSxnQjs7Ozs7OztBQ0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckMsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQyxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsc0NBQXNDO0FBQ3RDLHVDQUF1QztBQUN2Qyx1Q0FBdUM7QUFDdkMsc0NBQXNDO0FBQ3RDLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQSIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTk5OTIwMDBjZDYzMmY2ZTZiMTgiLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBTaG93RGF0YSBmcm9tICcuL3Nob3dEYXRhJztcclxubGV0IGRhdGEgPSBuZXcgU2hvd0RhdGEoKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyRm9ybVxyXG57XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKXtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgdGhpcy5jbGVhckNvbnRhaW5lcigpO1xyXG4gICAgICAgdmFyIGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwic2hvdy10aW1lLWJsb2NrXCIsXCJmYWxzZS1ibG9ja1wiKTtcclxuICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xyXG4gICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IFwi0J/QvtC60LDQt9Cw0YLRjCDQstGA0LXQvNGPXCI7XHJcbiAgICAgICB2YXIgdXBfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgdmFyIGRvd25fbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgdXBfbGFiZWwuY2xhc3NMaXN0LmFkZChcInVwLWxhYmVsXCIsICdsYWJlbCcpO1xyXG4gICAgICAgZG93bl9sYWJlbC5jbGFzc0xpc3QuYWRkKFwiZG93bi1sYWJlbFwiLCAnbGFiZWwnKTtcclxuICAgICAgIHZhciBkYXRlVGltZSA9IGRhdGEuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciB0aW1lciA7XHJcbiAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYWxzZS1ibG9jaycpWzBdPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwiZmFsc2UtYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gXCLQn9C+0LrQsNC30LDRgtGMINCy0YDQtdC80Y9cIjtcclxuICAgICAgICAgICAgICAgIGlmKHRpbWVyICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrLmNsYXNzTmFtZSA9IFwic2hvdy10aW1lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gXCLQodC60YDRi9GC0YxcIjtcclxuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lID0gZGF0YS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBfbGFiZWwuaW5uZXJUZXh0ID0gXCLQodC10LPQvtC00L3RjzogXCIrIGRhdGVUaW1lLmRheStcIiBcIitkYXRlVGltZS5tb250aCtcIiBcIitkYXRlVGltZS55ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG93bl9sYWJlbC5pbm5lclRleHQgPSBcItCS0YDQtdC80Y86IFwiK2RhdGVUaW1lLmhvdXIrXCI6XCIrZGF0ZVRpbWUubWluK1wiOlwiK2RhdGVUaW1lLnNlYztcclxuICAgICAgICAgICAgICAgIH0sMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHVwX2xhYmVsKTtcclxuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChkb3duX2xhYmVsKTtcclxuICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJsb2NrKTtcclxuICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICB9XHJcbiAgICBjbGVhckNvbnRhaW5lcigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFpbmVyLmxlbmd0aCA9PSAwICYmIHRoaXMuY29udGFpbmVyID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFdmVudEV4Y2VwdGlvbihcIkNvbnRhaW5lciDQvdC1INC90LDQudC00LXQvVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlckZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlbmRlckZvcm0gZnJvbSAnLi9yZW5kZXJGb3JtJztcclxuXHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcbmxldCByZW5kZXIgPSBuZXcgUmVuZGVyRm9ybShjb250YWluZXIpO1xyXG5yZW5kZXIucmVuZGVyKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWVudS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93RGF0YVxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgICBnZXREYXRlKCl7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGggPSB0aGlzLmRhdGUuZ2V0TW9udGgoKSsxO1xyXG4gICAgICAgIHZhciBtaW4gPSB0aGlzLnN3aXRjaFRpbWUodGhpcy5kYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICAgICAgdmFyIHNlYyA9IHRoaXMuc3dpdGNoVGltZSh0aGlzLmRhdGUuZ2V0U2Vjb25kcygpKTtcclxuICAgICAgICB2YXIgaG91ciA9IHRoaXMuc3dpdGNoVGltZSh0aGlzLmRhdGUuZ2V0SG91cnMoKSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobW9udGgpe1xyXG4gICAgICAgICAgICBjYXNlIDE6IG1vbnRoID0gXCLQr9C90LLQsNGA0Y9cIjsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogbW9udGggPSBcItCk0LXQstGA0LDQu9GPXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6IG1vbnRoID0gXCLQnNCw0YDRgtCwXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6IG1vbnRoID0gXCLQkNC/0YDQtdC70Y9cIjsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTogbW9udGggPSBcItCc0LDRj1wiOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2OiBtb250aCA9IFwi0JjRjtC90Y9cIjsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzogbW9udGggPSBcItCY0Y7Qu9GPXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDg6IG1vbnRoID0gXCLQkNCy0LPRg9GB0YLQsFwiOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA5OiBtb250aCA9IFwi0KHQtdC90YLRj9Cx0YDRj1wiOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDogbW9udGggPSBcItCe0LrRgtGP0LHRgNGPXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDExOiBtb250aCA9IFwi0J3QvtGP0LHRgNGPXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEyOiBtb250aCA9IFwi0JTQtdC60YDQsdGA0Y9cIjsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAge1xyXG4gICAgICAgICAgICBkYXk6dGhpcy5kYXRlLmdldERhdGUoKSxcclxuICAgICAgICAgICAgeWVyOnRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICBtaW46bWluLFxyXG4gICAgICAgICAgICBob3VyOmhvdXIsXHJcbiAgICAgICAgICAgIHNlYzpzZWMsXHJcbiAgICAgICAgICAgIG1vbnRoOm1vbnRoLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzd2l0Y2hUaW1lKHRpbWUpe1xyXG4gICAgICAgIHN3aXRjaCAodGltZSl7XHJcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFwiMDBcIjtcclxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gXCIwMVwiO1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBcIjAyXCI7XHJcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFwiMDNcIjtcclxuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gXCIwNFwiO1xyXG4gICAgICAgICAgICBjYXNlIDU6IHJldHVybiBcIjA1XCI7XHJcbiAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFwiMDZcIjtcclxuICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gXCIwN1wiO1xyXG4gICAgICAgICAgICBjYXNlIDg6IHJldHVybiBcIjA4XCI7XHJcbiAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFwiMDlcIjtcclxuICAgICAgICAgICAgZGVmYXVsdDpyZXR1cm4gdGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nob3dEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=