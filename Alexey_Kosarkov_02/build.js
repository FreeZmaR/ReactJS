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
        var timer = setInterval(function () {
            dateTime = data.getDate();
            up_label.innerText = "Сегодня:  "+ dateTime.day+" "+dateTime.month+" "+dateTime.yer;
            down_label.innerText = "Время:     "+dateTime.hour+":"+dateTime.min+":"+dateTime.sec;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmQwOTZmOGI5OTg3NjZmODRiODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3dEYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDL0NBOzs7QUFHQTtBQUNBO0FBQ0EsZ0I7Ozs7Ozs7QUNMQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMscUNBQXFDO0FBQ3JDLGtDQUFrQztBQUNsQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLHNDQUFzQztBQUN0Qyx1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLHNDQUFzQztBQUN0Qyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZkMDk2ZjhiOTk4NzY2Zjg0YjgyIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgU2hvd0RhdGEgZnJvbSAnLi9zaG93RGF0YSc7XHJcbmxldCBkYXRhID0gbmV3IFNob3dEYXRhKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlckZvcm1cclxue1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcil7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgIHRoaXMuY2xlYXJDb250YWluZXIoKTtcclxuICAgICAgIHZhciBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInNob3ctdGltZS1ibG9ja1wiLFwiZmFsc2UtYmxvY2tcIik7XHJcbiAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcclxuICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcItCf0L7QutCw0LfQsNGC0Ywg0LLRgNC10LzRj1wiO1xyXG4gICAgICAgdmFyIHVwX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgIHZhciBkb3duX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgIHVwX2xhYmVsLmNsYXNzTGlzdC5hZGQoXCJ1cC1sYWJlbFwiLCAnbGFiZWwnKTtcclxuICAgICAgIGRvd25fbGFiZWwuY2xhc3NMaXN0LmFkZChcImRvd24tbGFiZWxcIiwgJ2xhYmVsJyk7XHJcbiAgICAgICB2YXIgZGF0ZVRpbWUgPSBkYXRhLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRhdGVUaW1lID0gZGF0YS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIHVwX2xhYmVsLmlubmVyVGV4dCA9IFwi0KHQtdCz0L7QtNC90Y86ICBcIisgZGF0ZVRpbWUuZGF5K1wiIFwiK2RhdGVUaW1lLm1vbnRoK1wiIFwiK2RhdGVUaW1lLnllcjtcclxuICAgICAgICAgICAgZG93bl9sYWJlbC5pbm5lclRleHQgPSBcItCS0YDQtdC80Y86ICAgICBcIitkYXRlVGltZS5ob3VyK1wiOlwiK2RhdGVUaW1lLm1pbitcIjpcIitkYXRlVGltZS5zZWM7XHJcbiAgICAgICAgfSwxMDAwKTtcclxuICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZhbHNlLWJsb2NrJylbMF09PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJmYWxzZS1ibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcItCf0L7QutCw0LfQsNGC0Ywg0LLRgNC10LzRj1wiO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBibG9jay5jbGFzc05hbWUgPSBcInNob3ctdGltZS1ibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IFwi0KHQutGA0YvRgtGMXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHVwX2xhYmVsKTtcclxuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChkb3duX2xhYmVsKTtcclxuICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJsb2NrKTtcclxuICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICB9XHJcbiAgICBjbGVhckNvbnRhaW5lcigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFpbmVyLmxlbmd0aCA9PSAwICYmIHRoaXMuY29udGFpbmVyID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFdmVudEV4Y2VwdGlvbihcIkNvbnRhaW5lciDQvdC1INC90LDQudC00LXQvVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlckZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlbmRlckZvcm0gZnJvbSAnLi9yZW5kZXJGb3JtJztcclxuXHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcbmxldCByZW5kZXIgPSBuZXcgUmVuZGVyRm9ybShjb250YWluZXIpO1xyXG5yZW5kZXIucmVuZGVyKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWVudS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93RGF0YVxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgICBnZXREYXRlKCl7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGggPSB0aGlzLmRhdGUuZ2V0TW9udGgoKSsxO1xyXG4gICAgICAgIHZhciBtaW4gPSB0aGlzLnN3aXRjaFRpbWUodGhpcy5kYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICAgICAgdmFyIHNlYyA9IHRoaXMuc3dpdGNoVGltZSh0aGlzLmRhdGUuZ2V0U2Vjb25kcygpKTtcclxuICAgICAgICB2YXIgaG91ciA9IHRoaXMuc3dpdGNoVGltZSh0aGlzLmRhdGUuZ2V0SG91cnMoKSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobW9udGgpe1xyXG4gICAgICAgICAgICBjYXNlIDE6IG1vbnRoID0gXCLQr9C90LLQsNGA0Y9cIjsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogbW9udGggPSBcItCk0LXQstGA0LDQu9GPXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6IG1vbnRoID0gXCLQnNCw0YDRgtCwXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6IG1vbnRoID0gXCLQkNC/0YDQtdC70Y9cIjsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTogbW9udGggPSBcItCc0LDRj1wiOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2OiBtb250aCA9IFwi0JjRjtC90Y9cIjsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzogbW9udGggPSBcItCY0Y7Qu9GPXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDg6IG1vbnRoID0gXCLQkNCy0LPRg9GB0YLQsFwiOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA5OiBtb250aCA9IFwi0KHQtdC90YLRj9Cx0YDRj1wiOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDogbW9udGggPSBcItCe0LrRgtGP0LHRgNGPXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDExOiBtb250aCA9IFwi0J3QvtGP0LHRgNGPXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEyOiBtb250aCA9IFwi0JTQtdC60YDQsdGA0Y9cIjsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAge1xyXG4gICAgICAgICAgICBkYXk6dGhpcy5kYXRlLmdldERhdGUoKSxcclxuICAgICAgICAgICAgeWVyOnRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICBtaW46bWluLFxyXG4gICAgICAgICAgICBob3VyOmhvdXIsXHJcbiAgICAgICAgICAgIHNlYzpzZWMsXHJcbiAgICAgICAgICAgIG1vbnRoOm1vbnRoLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzd2l0Y2hUaW1lKHRpbWUpe1xyXG4gICAgICAgIHN3aXRjaCAodGltZSl7XHJcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFwiMDBcIjtcclxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gXCIwMVwiO1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBcIjAyXCI7XHJcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFwiMDNcIjtcclxuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gXCIwNFwiO1xyXG4gICAgICAgICAgICBjYXNlIDU6IHJldHVybiBcIjA1XCI7XHJcbiAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFwiMDZcIjtcclxuICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gXCIwN1wiO1xyXG4gICAgICAgICAgICBjYXNlIDg6IHJldHVybiBcIjA4XCI7XHJcbiAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFwiMDlcIjtcclxuICAgICAgICAgICAgZGVmYXVsdDpyZXR1cm4gdGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nob3dEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=