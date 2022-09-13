/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectData": () => (/* binding */ addProjectData),
/* harmony export */   "addTodoData": () => (/* binding */ addTodoData),
/* harmony export */   "changeStatusData": () => (/* binding */ changeStatusData),
/* harmony export */   "delProjectData": () => (/* binding */ delProjectData),
/* harmony export */   "delTodoData": () => (/* binding */ delTodoData),
/* harmony export */   "editTodoData": () => (/* binding */ editTodoData),
/* harmony export */   "getProjectData": () => (/* binding */ getProjectData),
/* harmony export */   "getProjectsList": () => (/* binding */ getProjectsList),
/* harmony export */   "getTodoData": () => (/* binding */ getTodoData),
/* harmony export */   "getTodoList": () => (/* binding */ getTodoList),
/* harmony export */   "saveProjects": () => (/* binding */ saveProjects),
/* harmony export */   "saveTodos": () => (/* binding */ saveTodos)
/* harmony export */ });
const projectList = []; getSavedProjects();

function getSavedProjects(){
    let projectsSaved = JSON.parse(localStorage.getItem("projectList") || "[]");
    for (const project of projectsSaved) {
        let id = project[0];
        let name = project[1];
        addProjectData(name,id,false);
    }
}

function saveProjects(){
    let list = [];
    for (const project of projectList) {
        let save = [];
        save.push(
            project.getId(),
            project.getName()
        )
        list.push(save);
    }
    localStorage.setItem("projectList", JSON.stringify(list) );
}

function getProjectsList() {
    let list = projectList;
    return list;
}

const todoList = []; getSavedTodos();

function getSavedTodos(){
    let todosSaved = JSON.parse( localStorage.getItem("todoList") || "[]" )
    for (const todo of todosSaved) {
        let id = todo[0];
        let name = todo[1];
        let projectId = todo[2];
        let description = todo[3];
        let date = todo[4];
        let priority = todo[5];
        let status = todo[6];
        addTodoData(name,id,projectId,description,date,priority,status,false)
    }
}

function saveTodos(){
    let list = [];
    for (const todo of todoList) {
        let save = [];
        save.push(
            todo.getId(),
            todo.getName(),
            todo.getProjectId(),
            todo.getDesc(),
            todo.getDate(),
            todo.getPriority(),
            todo.getStatus()
        )
        list.push(save);
    }
    localStorage.setItem("todoList", JSON.stringify(list) );
}

function getTodoList() {
    let list = todoList;
    return list;
}

function Project(nameInput,idInput){

    let name = nameInput;
    let id = 0;
    if(idInput === "new"){
        if ( projectList.length ){
            let last = projectList.length - 1;
            id = projectList[last].getId() + 1;
        }
    }else id = idInput

    function getId(){
        return id;
    }

    function setName(name){
        name = name;
    }

    function getName(){
        return name;
    }

    return{getId,setName,getName};
}

function Todo(nameInput,idInput,projectIdInput,descriptionInput,dateInput,priorityInput,status){
    let name = nameInput;
    let id = 0;
    if(idInput === "new"){
        if (todoList.length){
            let last = todoList.length - 1;
            id = todoList[last].getId() + 1;
        }
    }else id = idInput

    let projectId = projectIdInput;
    let description = descriptionInput;
    let date = new Date(`${dateInput}`);
    let priority = priorityInput;
    let isDone = status;
    
    function setName(newName){
        name = newName;
    }

    function getName(){
        return name;
    }

    function getId(){
        return id;
    }

    function getProjectId(){
        return projectId;
    }
    
    function setDesc(description){
        description = description;
    }

    function getDesc(){
        return description;
    }
    
    function setDate(newDate){
        date = new Date(`${newDate}`);
    }

    function getDate(){
        return date;
    }

    function setPriority(newPriority){
        priority = newPriority;
    }

    function getPriority(){
        return priority;
    }

    function changeStatus(){
        isDone = !isDone;
    }

    function getStatus(){
        return isDone;
    }

    return{
        setName,getName,getId,getProjectId,setDesc,getDesc,
        setDate,getDate,setPriority,getPriority,changeStatus,getStatus}
}

function addProjectData(name,id,output) {
    for (const item of projectList) {
        if (item.getName() === name) return "error";
    }
    let newProject = Project(name,id);
    projectList.push( newProject );
    if(output) return newProject;
}

function getProjectData(projectId) {
    let idProject = parseInt(projectId);
    for (const project of projectList) {
        if ( project.getId() === parseInt(idProject) ) return project;
    }
}

function delProjectData(projectId) {
    let idProject = parseInt(projectId);
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].getId() === idProject) {
            projectList.splice(i,1);
            break;
        }
    }
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].getProjectId() === idProject) {
            todoList.splice(i,1);
            i--;
        }
    }
}

function addTodoData(name,id,projectId,description,date,priority,status,output) {
    let idProject = parseInt(projectId);
    for (const item of todoList) {
        if (item.getName() === name && 
            item.getProjectId() === idProject) {
            return "error";
        }
    }
    let newTodo = Todo(name,id,idProject,description,date,priority,status);
    todoList.push( newTodo );
    if(output) return "done";
}

function getTodoData(todoId) {
    let idTodo = parseInt(todoId);
    for (const todo of todoList) {
        if ( todo.getId() === idTodo ) return todo;
    }
}

function delTodoData(todoId) {
    let idTodo = parseInt(todoId);
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].getId() === idTodo) {
            todoList.splice(i,1);
            break;
        }
    }
}

function editTodoData(name,todoId,description,date,priority){
    let idTodo = parseInt(todoId);
    for (let i = 0; i < todoList.length; i++) {
       if(todoList[i].getId() === idTodo){
            let projectId = todoList[i].getProjectId();
            for(const item of todoList) {
                if(item.getId() === idTodo) continue;
                if( item.getName() === name && 
                    item.getProjectId() === projectId ) {
                    return "error";
                }
            }
            todoList[i].setName(name);
            todoList[i].setDesc(description);
            todoList[i].setDate(date);
            todoList[i].setPriority(priority);
            return "done";
       }
    }
}

function changeStatusData( todoId ){
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].getId() === parseInt(todoId)) {
            todoList[i].changeStatus();
        }
    }
}

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeStatusFunc": () => (/* binding */ changeStatusFunc),
/* harmony export */   "delProjectFunc": () => (/* binding */ delProjectFunc),
/* harmony export */   "delTodoFunc": () => (/* binding */ delTodoFunc),
/* harmony export */   "editTodoFunc": () => (/* binding */ editTodoFunc),
/* harmony export */   "newProjectFunc": () => (/* binding */ newProjectFunc),
/* harmony export */   "newTodoFunc": () => (/* binding */ newTodoFunc),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad),
/* harmony export */   "showTodosFunc": () => (/* binding */ showTodosFunc),
/* harmony export */   "todoFormShow": () => (/* binding */ todoFormShow)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");




function pageLoad(){

    let projectList = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getProjectsList)();
    projectList.sort(
        (a,b)=>{
            return a.getName().localeCompare(  b.getName() );
        }
    );
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.setLayout)(projectList);
}

function showTodosFunc(id,filter){
    let idProject = id;
    let todoList = getTodoByID(idProject);

    if (filter !== "all") {
        todoList = filterTodo(todoList,filter);
    }

    todoList.sort( 
        (a,b)=> (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])( a.getDate(),b.getDate() )
    )
    let title = id;
    if (title !== "all" &&
        title !== "day" &&
        title !== "week"
        ) {
        title = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getProjectData)(id).getName();
    }
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.todosView)(id, title, todoList, filter);
}

function getTodoByID(idProject){
    let todoList = [];
    if(idProject === "all") {
        todoList = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getTodoList)();
    }else if( idProject === "day" ){
        todoList = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getTodoList)().filter(
            (item)=> (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])( new Date(), item.getDate() )
        )
    }else if( idProject === "week" ){
        todoList = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getTodoList)().filter(
            (item)=> (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])( new Date(), item.getDate() )
        )
    }else{
        let projectId = parseInt(idProject);
        todoList = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getTodoList)().filter(
            (item)=> item.getProjectId() === projectId
        )
    }

    return todoList;
}

function filterTodo(todoList,filter) {
    let newlist = [];
    if (filter === "done") {
        newlist = todoList.filter(
            (item)=> item.getStatus()
        )
    }else if (filter === "not") {
        newlist = todoList.filter(
            (item)=> {
                let today = new Date();
                if( !(0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(today,item.getDate()) ){
                    return !item.getStatus() && ( ( (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])( today, item.getDate() ) <= 0 ) )
                }else{
                    return !item.getStatus()
                }
            }
        )
    }else if (filter === "out") {
        newlist = todoList.filter(
            (item)=> {
                let today = new Date();
                if( !(0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(today,item.getDate()) ){
                    return !item.getStatus() && ( (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])( today, item.getDate() ) > 0 )
                }
            }
        )
    }
    return newlist;
}

function newProjectFunc(name) {
    let newProject = (0,_data__WEBPACK_IMPORTED_MODULE_0__.addProjectData)(name,"new",true);
    if (newProject === "error") {
        return "error";
    }
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.addProjectView)(newProject);
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
    let id = newProject.getId();
    return id;
}

function delProjectFunc(id) {
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.delProjectData)(id);
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.delProjectView)((0,_data__WEBPACK_IMPORTED_MODULE_0__.getProjectsList)());
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveTodos)();
}

function todoFormShow(id,projectId){
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.todoForm)(id,projectId);
}

function newTodoFunc(name,projectId,description,date,priority){
    let output = (0,_data__WEBPACK_IMPORTED_MODULE_0__.addTodoData)(name,"new",projectId,description,date,priority,false,true);
    if (output==="done") (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveTodos)();
    return output;
}

function editTodoFunc(name,todoId,description,date,priority){
    let output = (0,_data__WEBPACK_IMPORTED_MODULE_0__.editTodoData)(name,todoId,description,date,priority); 
    if (output==="done") (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveTodos)();
    return output;
}

function changeStatusFunc(id){
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.changeStatusData)(id);
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveTodos)();
}

function delTodoFunc(id){
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.delTodoData)(id);
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveTodos)();
}

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectView": () => (/* binding */ addProjectView),
/* harmony export */   "delProjectView": () => (/* binding */ delProjectView),
/* harmony export */   "setLayout": () => (/* binding */ setLayout),
/* harmony export */   "todoForm": () => (/* binding */ todoForm),
/* harmony export */   "todosView": () => (/* binding */ todosView)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");



const body = document.querySelector("body");

function setLayout(projectList){
    body.classList.add("wrapper");
    let head = header();
    let asid = aside(projectList);
    let main = document.createElement("div");
    main.classList.add("main","flex");
    body.append(head,asid,main);
}

function header() {
    let header = document.createElement("div");
    header.classList.add("header","flex");
    let title = document.createElement("h1");
    title.innerText = "To Do App - The Odin Project";
    header.appendChild(title);
    return header;
}

function aside(projectList) {
    let asid = document.createElement("div");
    asid.classList.add("aside","flex");
    const list = projectList;

    let allPro = document.createElement("div");
    allPro.classList.add("projects","selected");
    allPro.setAttribute("data-project","all")
    allPro.innerText = "All";
    asid.appendChild(allPro);
    
    let dayPro = document.createElement("div");
    dayPro.classList.add("projects");
    dayPro.setAttribute("data-project","day")
    dayPro.innerText = "Today";
    asid.appendChild(dayPro);

    let weekPro = document.createElement("div");
    weekPro.classList.add("projects");
    weekPro.setAttribute("data-project","week")
    weekPro.innerText = "This Week";
    asid.appendChild(weekPro);

    for (const item of list) {
        let div = document.createElement("div");
        div.classList.add("projects");
        div.setAttribute("data-project",`${item.getId()}`)
        div.innerText = item.getName();
        asid.appendChild(div);
    }

    let addForm = document.createElement("div");
    addForm.classList.add("addProject","flex");
    let input = document.createElement("input");
    input.setAttribute("id","addProjectTitle");
    input.setAttribute("type","text");
    input.setAttribute("value","New Project");
    let btn = document.createElement("button");
    btn.classList.add("green");
    btn.setAttribute("id","addProjectBtn");
    btn.innerText = "Add";
    addForm.append(input,btn);
    asid.appendChild(addForm);
    return asid;
}

function todosView(id,title,todoList,filter) {
    if (document.querySelector(".selected")) {
        document.querySelector(".selected").classList.remove("selected");
    }
    let main = document.querySelector(".main");
    main.innerHTML = "";
    main.append(
        todoViewHead(id,title,filter),
        todoViewBody(id,title,todoList)
    );
    document.querySelector(`.projects[data-project="${id}"]`).classList.add("selected");
}

function todoViewHead(id,title,filter){
    let div = document.createElement("div");
    div.classList.add("head","flex");
    div.setAttribute("data-project",`${id}`)
    let h2 = document.createElement("h2");
    h2.innerText = title;
    div.appendChild(h2);
    if (id !== title) {
        let btn = document.createElement("button");
        btn.classList.add("red");
        btn.setAttribute("id","delPro");
        btn.innerText = "Delete";
        div.appendChild(btn);
    }
    let select = document.createElement("select");
    select.setAttribute("id","filter");

    let option0 = document.createElement("option");
    option0.setAttribute("value","all");
    if(filter === "all") option0.setAttribute("selected","selected")
    option0.innerText = "All";
    select.appendChild(option0);

    let option1 = document.createElement("option");
    option1.setAttribute("value","done");
    if(filter === "done") option1.setAttribute("selected","selected")
    option1.innerText = "Done";
    select.appendChild(option1);

    let option2 = document.createElement("option");
    option2.setAttribute("value","not");
    if(filter === "not") option2.setAttribute("selected","selected")
    option2.innerText = "Not Done";
    select.appendChild(option2);

    let option3 = document.createElement("option");
    option3.setAttribute("value","out");
    if(filter === "out") option3.setAttribute("selected","selected")
    option3.innerText = "Out Dated";
    select.appendChild(option3);
    
    div.appendChild(select);
    return div;
}

function todoViewBody(id,title,todoList){
    let list = todoList;
    let div = document.createElement("div");
    div.classList.add("content","flex");

    if (id !== title) {
        let btn = document.createElement("button");
        btn.classList.add("green");
        btn.setAttribute("id","newTodo");
        btn.innerText = "New";
        div.appendChild(btn);
    }

    for (const item of list) {
        div.appendChild( todoDiv(item) );
    }
    return div;
}

function todoDiv(item) {
    let id = item.getId();
    let name = item.getName();

    let date = item.getDate();
    let dd = `${date.getDate()}`.padStart(2, '0');
    let mm = `${date.getMonth() + 1}`.padStart(2, '0');
    let yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;

    let priority = item.getPriority();
    let status = item.getStatus();

    let div = document.createElement("div");
    div.classList.add("todo","flex",priority);
    div.setAttribute("data-todo",`${id}`);

    let leftdiv = document.createElement("div");
    leftdiv.classList.add("left","flex");

    let checkBox = document.createElement("div");
    checkBox.classList.add("checkbox");
    if (status) {
        checkBox.classList.add("done");
    }else {
        let today = new Date()
        let dd = `${today.getDate()}`.padStart(2, '0');
        let mm = `${today.getMonth() + 1}`.padStart(2, '0');
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        if( !(0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])( new Date(today), new Date(date)) ){
            if ( (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])( new Date(today), new Date(date) ) > 0 ) {
                checkBox.classList.add("outdated");
            }
        }
    }

    let title = document.createElement("h3");
    title.classList.add("editTodo");
    title.innerText = name;

    leftdiv.append(checkBox,title);


    let rightdiv = document.createElement("div");
    rightdiv.classList.add("right","flex");

    let dateSpan = document.createElement("span");
    dateSpan.innerText = date;

    let prioritySpan = document.createElement("span");
    prioritySpan.innerText = priority;

    let btn = document.createElement("button");
    btn.classList.add("delTodo","red");
    btn.innerText = "X";

    rightdiv.append(dateSpan,prioritySpan,btn);

    div.append(leftdiv,rightdiv);
    return div;
}

function addProjectView(project){
    let aside = document.querySelector(".aside");
    let div = document.createElement("div");
    let id = project.getId();
    div.classList.add("projects");
    div.setAttribute("data-project",`${id}`);
    div.innerText = project.getName();
    aside.insertBefore( div,aside.querySelector(".addProject") );
}

function delProjectView(projectList){
    let body = document.querySelector(".wrapper");
    let main = document.querySelector(".main");
    body.removeChild(document.querySelector(".aside"))
    body.insertBefore( aside(projectList) , main );
}

function todoForm(todoId,projectID){
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todoForm","flex");
    let h2 = document.createElement("h2");
    h2.innerText = "Add New Todo";
    todoDiv.appendChild(h2);

    let form = document.createElement("form");
    form.classList.add("flex");
    let priorityList = ["high","mid","low"];

    let name,desc,date,priority;
    if (todoId === "none") {
        name = "New Todo Name"; 
        desc = "New Todo Description"; 

        date = new Date();
        let dd = `${date.getDate()}`.padStart(2, '0');
        let mm = `${date.getMonth() + 1}`.padStart(2, '0');
        let yyyy = date.getFullYear();
        date = `${yyyy}-${mm}-${dd}`;

        priority = "high";
    }else{
        let todo = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getTodoData)(todoId);
        name = todo.getName();
        desc = todo.getDesc();

        date = todo.getDate();
        let dd = `${date.getDate()}`.padStart(2, '0');
        let mm = `${date.getMonth() + 1}`.padStart(2, '0');
        let yyyy = date.getFullYear();
        date = `${yyyy}-${mm}-${dd}`;

        priority = todo.getPriority();
    }

    let inputName = document.createElement("input");
    inputName.setAttribute("type","text");
    inputName.setAttribute("id","todoName");
    inputName.setAttribute("required","required");
    inputName.setAttribute("value",name);

    let textArea = document.createElement("textarea");
    textArea.setAttribute("id","todoDesc");
    textArea.setAttribute("value",desc);
    textArea.setAttribute("cols","50");
    textArea.setAttribute("rows","10");
    textArea.innerText = desc;

    let inputDiv = document.createElement("div");
    let inputDate = document.createElement("input");
    inputDate.setAttribute("type","date");
    inputDate.setAttribute("id","todoDate");
    inputDate.setAttribute("value",date);

    let select = document.createElement("select");
    select.setAttribute("id","todoPriority");
    for (const option of priorityList) {
        let opt = document.createElement("option");
        opt.setAttribute("value",option);
        opt.innerText = option;
        if(option === priority) opt.setAttribute("selected","selected")
        select.appendChild(opt);
    }
    inputDiv.append(inputDate,select);

    let btnDiv = document.createElement("div");
    let saveBtn = document.createElement("button");
    saveBtn.setAttribute("id","saveTodo");
    saveBtn.setAttribute("data-todo",todoId);
    saveBtn.setAttribute("data-project",projectID);
    saveBtn.classList.add("green");
    saveBtn.innerText = "Save";
    let cancelBtn = document.createElement("button");
    cancelBtn.setAttribute("id","cancel")
    cancelBtn.classList.add("red");
    cancelBtn.innerText = "Cancel";
    btnDiv.append(saveBtn,cancelBtn);

    form.append(inputName,textArea,inputDiv,btnDiv);
    todoDiv.appendChild(form);
    let wrapper = document.querySelector(".wrapper");
    wrapper.insertBefore( todoDiv , wrapper.firstChild );
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


(0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
asideEvents();

function asideEvents() {
    document.querySelectorAll('.projects').forEach(
        (item)=>{
            item.addEventListener("click",
                ()=>{
                    let id = item.getAttribute("data-project");
                    showTodos(id,"all");
                }
            )
        }
    )
    
    document.querySelector("#addProjectBtn").addEventListener("click",
        ()=>{
            let name = document.querySelector("#addProjectTitle").value.trim();
            if( !name.length ) name = "New Project"
            newProject(name);
        }
    )
}

showTodos("all","all");

function showTodos(projectId,filter) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.showTodosFunc)(projectId,filter);

    if (document.querySelector("#delPro")) {
        document.querySelector("#delPro").addEventListener("click",
            ()=>{
                delProject(projectId);
            }
        )
    }

    document.querySelector("#filter").addEventListener("change",
        (e)=>{
            let filter = e.target.value;
            showTodos(projectId,filter);
        }
    )

    if (document.querySelector("#newTodo")) {
        document.querySelector("#newTodo").addEventListener("click",
            ()=>{
                todoform("none",projectId);
            }
        )
    }

    document.querySelectorAll('.checkbox').forEach(
        (item)=>{
            item.addEventListener("click",
                ()=>{
                    let id = item.parentNode.parentNode.getAttribute("data-todo");
                    changeStatus(id,projectId);
                }
            )
        }
    )

    document.querySelectorAll('.editTodo').forEach(
        (item)=>{
            item.addEventListener("click",
                ()=>{
                    let id = item.parentNode.parentNode.getAttribute("data-todo");
                    todoform(id,projectId);
                }
            )
        }
    )

    document.querySelectorAll('.delTodo').forEach(
        (item)=>{
            item.addEventListener("click",
                ()=>{
                    let id = item.parentNode.parentNode.getAttribute("data-todo");
                    delTodo(id,projectId);
                }
            )
        }
    )
}

function newProject(name) {
    let id = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.newProjectFunc)(name);
    if (id === "error") alert("Change name, this one is already used.")
    else{
        document.querySelector(`.projects[data-project="${id}"]`).addEventListener("click",
            ()=>{
                showTodos(id,"all");
            }
        );
        showTodos( id, "all" );
    }
}

function delProject(id) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.delProjectFunc)(id);
    asideEvents();
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.showTodosFunc)( "all", "all" );
}

function todoform(id,projectId) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.todoFormShow)(id,projectId);
    document.querySelector("#saveTodo").addEventListener("click",
        (e)=>{
            e.preventDefault();
            let name = document.querySelector("#todoName").value.trim();
            if(!name.length) name = "New todo"

            let desc = document.querySelector("#todoDesc").value.trim();
            if(!desc.length) desc = "New todo desc"

            let date = document.querySelector("#todoDate").value.trim();
            if(!date.length) date = "01/01/2020"

            let priority = document.querySelector("#todoPriority").value.trim();
            if(!priority.length) priority = "mid"

            if(id !== "none") editTodo(name,id,projectId,desc,date,priority);
            else newTodo(name,projectId,desc,date,priority);
        }
    )

    document.querySelector("#cancel").addEventListener("click",
        (e)=>{
            e.preventDefault();
            document.querySelector(".wrapper").removeChild(
                document.querySelector(".todoForm")
            )
        }
    )
}

function newTodo(name,projectId,desc,date,priority){
    if( (0,_functions__WEBPACK_IMPORTED_MODULE_0__.newTodoFunc)(name,projectId,desc,date,priority) === "done" ){
        document.querySelector(".wrapper").removeChild(
            document.querySelector(".todoForm")
        )
        showTodos(projectId,filter="all");
    }else alert("Please change name");
}


function editTodo(name,todoId,projectId,desc,date,priority){
    if( (0,_functions__WEBPACK_IMPORTED_MODULE_0__.editTodoFunc)(name,todoId,desc,date,priority) === "done" ){
        document.querySelector(".wrapper").removeChild(
            document.querySelector(".todoForm")
        )
        showTodos(projectId,filter="all");
    }else alert("Please change name")
}

function changeStatus(id,projectId){
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.changeStatusFunc)(id);
    showTodos(projectId,"all");
}

function delTodo(id,projectId){
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.delTodoFunc)(id);
    showTodos(projectId,"all");
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBLFFBQVEsd0RBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLDREQUFnQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0EsSUFBSSx1REFBVztBQUNmO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJjb25zdCBwcm9qZWN0TGlzdCA9IFtdOyBnZXRTYXZlZFByb2plY3RzKCk7XG5cbmZ1bmN0aW9uIGdldFNhdmVkUHJvamVjdHMoKXtcbiAgICBsZXQgcHJvamVjdHNTYXZlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKSB8fCBcIltdXCIpO1xuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0c1NhdmVkKSB7XG4gICAgICAgIGxldCBpZCA9IHByb2plY3RbMF07XG4gICAgICAgIGxldCBuYW1lID0gcHJvamVjdFsxXTtcbiAgICAgICAgYWRkUHJvamVjdERhdGEobmFtZSxpZCxmYWxzZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVByb2plY3RzKCl7XG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgICAgbGV0IHNhdmUgPSBbXTtcbiAgICAgICAgc2F2ZS5wdXNoKFxuICAgICAgICAgICAgcHJvamVjdC5nZXRJZCgpLFxuICAgICAgICAgICAgcHJvamVjdC5nZXROYW1lKClcbiAgICAgICAgKVxuICAgICAgICBsaXN0LnB1c2goc2F2ZSk7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkobGlzdCkgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzTGlzdCgpIHtcbiAgICBsZXQgbGlzdCA9IHByb2plY3RMaXN0O1xuICAgIHJldHVybiBsaXN0O1xufVxuXG5jb25zdCB0b2RvTGlzdCA9IFtdOyBnZXRTYXZlZFRvZG9zKCk7XG5cbmZ1bmN0aW9uIGdldFNhdmVkVG9kb3MoKXtcbiAgICBsZXQgdG9kb3NTYXZlZCA9IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikgfHwgXCJbXVwiIClcbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3NTYXZlZCkge1xuICAgICAgICBsZXQgaWQgPSB0b2RvWzBdO1xuICAgICAgICBsZXQgbmFtZSA9IHRvZG9bMV07XG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSB0b2RvWzJdO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSB0b2RvWzNdO1xuICAgICAgICBsZXQgZGF0ZSA9IHRvZG9bNF07XG4gICAgICAgIGxldCBwcmlvcml0eSA9IHRvZG9bNV07XG4gICAgICAgIGxldCBzdGF0dXMgPSB0b2RvWzZdO1xuICAgICAgICBhZGRUb2RvRGF0YShuYW1lLGlkLHByb2plY3RJZCxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5LHN0YXR1cyxmYWxzZSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVG9kb3MoKXtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2RvTGlzdCkge1xuICAgICAgICBsZXQgc2F2ZSA9IFtdO1xuICAgICAgICBzYXZlLnB1c2goXG4gICAgICAgICAgICB0b2RvLmdldElkKCksXG4gICAgICAgICAgICB0b2RvLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHRvZG8uZ2V0UHJvamVjdElkKCksXG4gICAgICAgICAgICB0b2RvLmdldERlc2MoKSxcbiAgICAgICAgICAgIHRvZG8uZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgdG9kby5nZXRQcmlvcml0eSgpLFxuICAgICAgICAgICAgdG9kby5nZXRTdGF0dXMoKVxuICAgICAgICApXG4gICAgICAgIGxpc3QucHVzaChzYXZlKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeShsaXN0KSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0xpc3QoKSB7XG4gICAgbGV0IGxpc3QgPSB0b2RvTGlzdDtcbiAgICByZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gUHJvamVjdChuYW1lSW5wdXQsaWRJbnB1dCl7XG5cbiAgICBsZXQgbmFtZSA9IG5hbWVJbnB1dDtcbiAgICBsZXQgaWQgPSAwO1xuICAgIGlmKGlkSW5wdXQgPT09IFwibmV3XCIpe1xuICAgICAgICBpZiAoIHByb2plY3RMaXN0Lmxlbmd0aCApe1xuICAgICAgICAgICAgbGV0IGxhc3QgPSBwcm9qZWN0TGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWQgPSBwcm9qZWN0TGlzdFtsYXN0XS5nZXRJZCgpICsgMTtcbiAgICAgICAgfVxuICAgIH1lbHNlIGlkID0gaWRJbnB1dFxuXG4gICAgZnVuY3Rpb24gZ2V0SWQoKXtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE5hbWUobmFtZSl7XG4gICAgICAgIG5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJue2dldElkLHNldE5hbWUsZ2V0TmFtZX07XG59XG5cbmZ1bmN0aW9uIFRvZG8obmFtZUlucHV0LGlkSW5wdXQscHJvamVjdElkSW5wdXQsZGVzY3JpcHRpb25JbnB1dCxkYXRlSW5wdXQscHJpb3JpdHlJbnB1dCxzdGF0dXMpe1xuICAgIGxldCBuYW1lID0gbmFtZUlucHV0O1xuICAgIGxldCBpZCA9IDA7XG4gICAgaWYoaWRJbnB1dCA9PT0gXCJuZXdcIil7XG4gICAgICAgIGlmICh0b2RvTGlzdC5sZW5ndGgpe1xuICAgICAgICAgICAgbGV0IGxhc3QgPSB0b2RvTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWQgPSB0b2RvTGlzdFtsYXN0XS5nZXRJZCgpICsgMTtcbiAgICAgICAgfVxuICAgIH1lbHNlIGlkID0gaWRJbnB1dFxuXG4gICAgbGV0IHByb2plY3RJZCA9IHByb2plY3RJZElucHV0O1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQ7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShgJHtkYXRlSW5wdXR9YCk7XG4gICAgbGV0IHByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dDtcbiAgICBsZXQgaXNEb25lID0gc3RhdHVzO1xuICAgIFxuICAgIGZ1bmN0aW9uIHNldE5hbWUobmV3TmFtZSl7XG4gICAgICAgIG5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SWQoKXtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RJZCgpe1xuICAgICAgICByZXR1cm4gcHJvamVjdElkO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZXREZXNjKGRlc2NyaXB0aW9uKXtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREZXNjKCl7XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0RGF0ZShuZXdEYXRlKXtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGAke25ld0RhdGV9YCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGF0ZSgpe1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcmlvcml0eShuZXdQcmlvcml0eSl7XG4gICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpb3JpdHkoKXtcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVN0YXR1cygpe1xuICAgICAgICBpc0RvbmUgPSAhaXNEb25lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpe1xuICAgICAgICByZXR1cm4gaXNEb25lO1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgc2V0TmFtZSxnZXROYW1lLGdldElkLGdldFByb2plY3RJZCxzZXREZXNjLGdldERlc2MsXG4gICAgICAgIHNldERhdGUsZ2V0RGF0ZSxzZXRQcmlvcml0eSxnZXRQcmlvcml0eSxjaGFuZ2VTdGF0dXMsZ2V0U3RhdHVzfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdERhdGEobmFtZSxpZCxvdXRwdXQpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcHJvamVjdExpc3QpIHtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0TmFtZSgpID09PSBuYW1lKSByZXR1cm4gXCJlcnJvclwiO1xuICAgIH1cbiAgICBsZXQgbmV3UHJvamVjdCA9IFByb2plY3QobmFtZSxpZCk7XG4gICAgcHJvamVjdExpc3QucHVzaCggbmV3UHJvamVjdCApO1xuICAgIGlmKG91dHB1dCkgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0RGF0YShwcm9qZWN0SWQpIHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gcGFyc2VJbnQocHJvamVjdElkKTtcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgICAgaWYgKCBwcm9qZWN0LmdldElkKCkgPT09IHBhcnNlSW50KGlkUHJvamVjdCkgKSByZXR1cm4gcHJvamVjdDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxQcm9qZWN0RGF0YShwcm9qZWN0SWQpIHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gcGFyc2VJbnQocHJvamVjdElkKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtpXS5nZXRJZCgpID09PSBpZFByb2plY3QpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodG9kb0xpc3RbaV0uZ2V0UHJvamVjdElkKCkgPT09IGlkUHJvamVjdCkge1xuICAgICAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGksMSk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvRGF0YShuYW1lLGlkLHByb2plY3RJZCxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5LHN0YXR1cyxvdXRwdXQpIHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gcGFyc2VJbnQocHJvamVjdElkKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdG9kb0xpc3QpIHtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0TmFtZSgpID09PSBuYW1lICYmIFxuICAgICAgICAgICAgaXRlbS5nZXRQcm9qZWN0SWQoKSA9PT0gaWRQcm9qZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJlcnJvclwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBuZXdUb2RvID0gVG9kbyhuYW1lLGlkLGlkUHJvamVjdCxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5LHN0YXR1cyk7XG4gICAgdG9kb0xpc3QucHVzaCggbmV3VG9kbyApO1xuICAgIGlmKG91dHB1dCkgcmV0dXJuIFwiZG9uZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0RhdGEodG9kb0lkKSB7XG4gICAgbGV0IGlkVG9kbyA9IHBhcnNlSW50KHRvZG9JZCk7XG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9MaXN0KSB7XG4gICAgICAgIGlmICggdG9kby5nZXRJZCgpID09PSBpZFRvZG8gKSByZXR1cm4gdG9kbztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxUb2RvRGF0YSh0b2RvSWQpIHtcbiAgICBsZXQgaWRUb2RvID0gcGFyc2VJbnQodG9kb0lkKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2RvTGlzdFtpXS5nZXRJZCgpID09PSBpZFRvZG8pIHtcbiAgICAgICAgICAgIHRvZG9MaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VG9kb0RhdGEobmFtZSx0b2RvSWQsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSl7XG4gICAgbGV0IGlkVG9kbyA9IHBhcnNlSW50KHRvZG9JZCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgIGlmKHRvZG9MaXN0W2ldLmdldElkKCkgPT09IGlkVG9kbyl7XG4gICAgICAgICAgICBsZXQgcHJvamVjdElkID0gdG9kb0xpc3RbaV0uZ2V0UHJvamVjdElkKCk7XG4gICAgICAgICAgICBmb3IoY29uc3QgaXRlbSBvZiB0b2RvTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uZ2V0SWQoKSA9PT0gaWRUb2RvKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiggaXRlbS5nZXROYW1lKCkgPT09IG5hbWUgJiYgXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0UHJvamVjdElkKCkgPT09IHByb2plY3RJZCApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvTGlzdFtpXS5zZXROYW1lKG5hbWUpO1xuICAgICAgICAgICAgdG9kb0xpc3RbaV0uc2V0RGVzYyhkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB0b2RvTGlzdFtpXS5zZXREYXRlKGRhdGUpO1xuICAgICAgICAgICAgdG9kb0xpc3RbaV0uc2V0UHJpb3JpdHkocHJpb3JpdHkpO1xuICAgICAgICAgICAgcmV0dXJuIFwiZG9uZVwiO1xuICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTdGF0dXNEYXRhKCB0b2RvSWQgKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2RvTGlzdFtpXS5nZXRJZCgpID09PSBwYXJzZUludCh0b2RvSWQpKSB7XG4gICAgICAgICAgICB0b2RvTGlzdFtpXS5jaGFuZ2VTdGF0dXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBpc1NhbWVXZWVrLCBpc1NhbWVEYXksIGNvbXBhcmVBc2MsIGNvbXBhcmVEZXNjIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgICAgc2F2ZVByb2plY3RzLCBnZXRQcm9qZWN0c0xpc3QsIGFkZFByb2plY3REYXRhLCBnZXRQcm9qZWN0RGF0YSwgZGVsUHJvamVjdERhdGEsXG4gICAgICAgICAgICBzYXZlVG9kb3MsIGdldFRvZG9MaXN0LCBhZGRUb2RvRGF0YSwgZWRpdFRvZG9EYXRhLCBnZXRUb2RvRGF0YSwgZGVsVG9kb0RhdGEsIGNoYW5nZVN0YXR1c0RhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgc2V0TGF5b3V0LCB0b2Rvc1ZpZXcsIGFkZFByb2plY3RWaWV3LCB0b2RvRm9ybSwgZGVsUHJvamVjdFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZCgpe1xuXG4gICAgbGV0IHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdHNMaXN0KCk7XG4gICAgcHJvamVjdExpc3Quc29ydChcbiAgICAgICAgKGEsYik9PntcbiAgICAgICAgICAgIHJldHVybiBhLmdldE5hbWUoKS5sb2NhbGVDb21wYXJlKCAgYi5nZXROYW1lKCkgKTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgc2V0TGF5b3V0KHByb2plY3RMaXN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUb2Rvc0Z1bmMoaWQsZmlsdGVyKXtcbiAgICBsZXQgaWRQcm9qZWN0ID0gaWQ7XG4gICAgbGV0IHRvZG9MaXN0ID0gZ2V0VG9kb0J5SUQoaWRQcm9qZWN0KTtcblxuICAgIGlmIChmaWx0ZXIgIT09IFwiYWxsXCIpIHtcbiAgICAgICAgdG9kb0xpc3QgPSBmaWx0ZXJUb2RvKHRvZG9MaXN0LGZpbHRlcik7XG4gICAgfVxuXG4gICAgdG9kb0xpc3Quc29ydCggXG4gICAgICAgIChhLGIpPT4gY29tcGFyZUFzYyggYS5nZXREYXRlKCksYi5nZXREYXRlKCkgKVxuICAgIClcbiAgICBsZXQgdGl0bGUgPSBpZDtcbiAgICBpZiAodGl0bGUgIT09IFwiYWxsXCIgJiZcbiAgICAgICAgdGl0bGUgIT09IFwiZGF5XCIgJiZcbiAgICAgICAgdGl0bGUgIT09IFwid2Vla1wiXG4gICAgICAgICkge1xuICAgICAgICB0aXRsZSA9IGdldFByb2plY3REYXRhKGlkKS5nZXROYW1lKCk7XG4gICAgfVxuICAgIHRvZG9zVmlldyhpZCwgdGl0bGUsIHRvZG9MaXN0LCBmaWx0ZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRUb2RvQnlJRChpZFByb2plY3Qpe1xuICAgIGxldCB0b2RvTGlzdCA9IFtdO1xuICAgIGlmKGlkUHJvamVjdCA9PT0gXCJhbGxcIikge1xuICAgICAgICB0b2RvTGlzdCA9IGdldFRvZG9MaXN0KCk7XG4gICAgfWVsc2UgaWYoIGlkUHJvamVjdCA9PT0gXCJkYXlcIiApe1xuICAgICAgICB0b2RvTGlzdCA9IGdldFRvZG9MaXN0KCkuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pPT4gaXNTYW1lRGF5KCBuZXcgRGF0ZSgpLCBpdGVtLmdldERhdGUoKSApXG4gICAgICAgIClcbiAgICB9ZWxzZSBpZiggaWRQcm9qZWN0ID09PSBcIndlZWtcIiApe1xuICAgICAgICB0b2RvTGlzdCA9IGdldFRvZG9MaXN0KCkuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pPT4gaXNTYW1lV2VlayggbmV3IERhdGUoKSwgaXRlbS5nZXREYXRlKCkgKVxuICAgICAgICApXG4gICAgfWVsc2V7XG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSBwYXJzZUludChpZFByb2plY3QpO1xuICAgICAgICB0b2RvTGlzdCA9IGdldFRvZG9MaXN0KCkuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pPT4gaXRlbS5nZXRQcm9qZWN0SWQoKSA9PT0gcHJvamVjdElkXG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kb0xpc3Q7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclRvZG8odG9kb0xpc3QsZmlsdGVyKSB7XG4gICAgbGV0IG5ld2xpc3QgPSBbXTtcbiAgICBpZiAoZmlsdGVyID09PSBcImRvbmVcIikge1xuICAgICAgICBuZXdsaXN0ID0gdG9kb0xpc3QuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pPT4gaXRlbS5nZXRTdGF0dXMoKVxuICAgICAgICApXG4gICAgfWVsc2UgaWYgKGZpbHRlciA9PT0gXCJub3RcIikge1xuICAgICAgICBuZXdsaXN0ID0gdG9kb0xpc3QuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFpc1NhbWVEYXkodG9kYXksaXRlbS5nZXREYXRlKCkpICl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXRlbS5nZXRTdGF0dXMoKSAmJiAoICggY29tcGFyZUFzYyggdG9kYXksIGl0ZW0uZ2V0RGF0ZSgpICkgPD0gMCApIClcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpdGVtLmdldFN0YXR1cygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfWVsc2UgaWYgKGZpbHRlciA9PT0gXCJvdXRcIikge1xuICAgICAgICBuZXdsaXN0ID0gdG9kb0xpc3QuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFpc1NhbWVEYXkodG9kYXksaXRlbS5nZXREYXRlKCkpICl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXRlbS5nZXRTdGF0dXMoKSAmJiAoIGNvbXBhcmVBc2MoIHRvZGF5LCBpdGVtLmdldERhdGUoKSApID4gMCApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiBuZXdsaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3UHJvamVjdEZ1bmMobmFtZSkge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gYWRkUHJvamVjdERhdGEobmFtZSxcIm5ld1wiLHRydWUpO1xuICAgIGlmIChuZXdQcm9qZWN0ID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgICB9XG4gICAgYWRkUHJvamVjdFZpZXcobmV3UHJvamVjdCk7XG4gICAgc2F2ZVByb2plY3RzKCk7XG4gICAgbGV0IGlkID0gbmV3UHJvamVjdC5nZXRJZCgpO1xuICAgIHJldHVybiBpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbFByb2plY3RGdW5jKGlkKSB7XG4gICAgZGVsUHJvamVjdERhdGEoaWQpO1xuICAgIGRlbFByb2plY3RWaWV3KGdldFByb2plY3RzTGlzdCgpKTtcbiAgICBzYXZlUHJvamVjdHMoKTtcbiAgICBzYXZlVG9kb3MoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9Gb3JtU2hvdyhpZCxwcm9qZWN0SWQpe1xuICAgIHRvZG9Gb3JtKGlkLHByb2plY3RJZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdUb2RvRnVuYyhuYW1lLHByb2plY3RJZCxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5KXtcbiAgICBsZXQgb3V0cHV0ID0gYWRkVG9kb0RhdGEobmFtZSxcIm5ld1wiLHByb2plY3RJZCxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5LGZhbHNlLHRydWUpO1xuICAgIGlmIChvdXRwdXQ9PT1cImRvbmVcIikgc2F2ZVRvZG9zKCk7XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb2RvRnVuYyhuYW1lLHRvZG9JZCxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5KXtcbiAgICBsZXQgb3V0cHV0ID0gZWRpdFRvZG9EYXRhKG5hbWUsdG9kb0lkLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHkpOyBcbiAgICBpZiAob3V0cHV0PT09XCJkb25lXCIpIHNhdmVUb2RvcygpO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTdGF0dXNGdW5jKGlkKXtcbiAgICBjaGFuZ2VTdGF0dXNEYXRhKGlkKTtcbiAgICBzYXZlVG9kb3MoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbFRvZG9GdW5jKGlkKXtcbiAgICBkZWxUb2RvRGF0YShpZCk7XG4gICAgc2F2ZVRvZG9zKCk7XG59IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgaXNTYW1lRGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgZ2V0VG9kb0RhdGEgfSBmcm9tICcuL2RhdGEnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMYXlvdXQocHJvamVjdExpc3Qpe1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG4gICAgbGV0IGhlYWQgPSBoZWFkZXIoKTtcbiAgICBsZXQgYXNpZCA9IGFzaWRlKHByb2plY3RMaXN0KTtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiLFwiZmxleFwiKTtcbiAgICBib2R5LmFwcGVuZChoZWFkLGFzaWQsbWFpbik7XG59XG5cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiLFwiZmxleFwiKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJUbyBEbyBBcHAgLSBUaGUgT2RpbiBQcm9qZWN0XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBhc2lkZShwcm9qZWN0TGlzdCkge1xuICAgIGxldCBhc2lkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhc2lkLmNsYXNzTGlzdC5hZGQoXCJhc2lkZVwiLFwiZmxleFwiKTtcbiAgICBjb25zdCBsaXN0ID0gcHJvamVjdExpc3Q7XG5cbiAgICBsZXQgYWxsUHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGxQcm8uY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIsXCJzZWxlY3RlZFwiKTtcbiAgICBhbGxQcm8uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsXCJhbGxcIilcbiAgICBhbGxQcm8uaW5uZXJUZXh0ID0gXCJBbGxcIjtcbiAgICBhc2lkLmFwcGVuZENoaWxkKGFsbFBybyk7XG4gICAgXG4gICAgbGV0IGRheVBybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF5UHJvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcbiAgICBkYXlQcm8uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsXCJkYXlcIilcbiAgICBkYXlQcm8uaW5uZXJUZXh0ID0gXCJUb2RheVwiO1xuICAgIGFzaWQuYXBwZW5kQ2hpbGQoZGF5UHJvKTtcblxuICAgIGxldCB3ZWVrUHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWVrUHJvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcbiAgICB3ZWVrUHJvLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLFwid2Vla1wiKVxuICAgIHdlZWtQcm8uaW5uZXJUZXh0ID0gXCJUaGlzIFdlZWtcIjtcbiAgICBhc2lkLmFwcGVuZENoaWxkKHdlZWtQcm8pO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIixgJHtpdGVtLmdldElkKCl9YClcbiAgICAgICAgZGl2LmlubmVyVGV4dCA9IGl0ZW0uZ2V0TmFtZSgpO1xuICAgICAgICBhc2lkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgbGV0IGFkZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZEZvcm0uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RcIixcImZsZXhcIik7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsXCJhZGRQcm9qZWN0VGl0bGVcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiTmV3IFByb2plY3RcIik7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJncmVlblwiKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIixcImFkZFByb2plY3RCdG5cIik7XG4gICAgYnRuLmlubmVyVGV4dCA9IFwiQWRkXCI7XG4gICAgYWRkRm9ybS5hcHBlbmQoaW5wdXQsYnRuKTtcbiAgICBhc2lkLmFwcGVuZENoaWxkKGFkZEZvcm0pO1xuICAgIHJldHVybiBhc2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb3NWaWV3KGlkLHRpdGxlLHRvZG9MaXN0LGZpbHRlcikge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmQoXG4gICAgICAgIHRvZG9WaWV3SGVhZChpZCx0aXRsZSxmaWx0ZXIpLFxuICAgICAgICB0b2RvVmlld0JvZHkoaWQsdGl0bGUsdG9kb0xpc3QpXG4gICAgKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdHNbZGF0YS1wcm9qZWN0PVwiJHtpZH1cIl1gKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIHRvZG9WaWV3SGVhZChpZCx0aXRsZSxmaWx0ZXIpe1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZFwiLFwiZmxleFwiKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsYCR7aWR9YClcbiAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICBpZiAoaWQgIT09IHRpdGxlKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsXCJkZWxQcm9cIik7XG4gICAgICAgIGJ0bi5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9XG4gICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsXCJmaWx0ZXJcIik7XG5cbiAgICBsZXQgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uMC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiYWxsXCIpO1xuICAgIGlmKGZpbHRlciA9PT0gXCJhbGxcIikgb3B0aW9uMC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIilcbiAgICBvcHRpb24wLmlubmVyVGV4dCA9IFwiQWxsXCI7XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbjApO1xuXG4gICAgbGV0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbjEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcImRvbmVcIik7XG4gICAgaWYoZmlsdGVyID09PSBcImRvbmVcIikgb3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIilcbiAgICBvcHRpb24xLmlubmVyVGV4dCA9IFwiRG9uZVwiO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24xKTtcblxuICAgIGxldCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24yLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJub3RcIik7XG4gICAgaWYoZmlsdGVyID09PSBcIm5vdFwiKSBvcHRpb24yLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKVxuICAgIG9wdGlvbjIuaW5uZXJUZXh0ID0gXCJOb3QgRG9uZVwiO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24yKTtcblxuICAgIGxldCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24zLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJvdXRcIik7XG4gICAgaWYoZmlsdGVyID09PSBcIm91dFwiKSBvcHRpb24zLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKVxuICAgIG9wdGlvbjMuaW5uZXJUZXh0ID0gXCJPdXQgRGF0ZWRcIjtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG4gICAgXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gdG9kb1ZpZXdCb2R5KGlkLHRpdGxlLHRvZG9MaXN0KXtcbiAgICBsZXQgbGlzdCA9IHRvZG9MaXN0O1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiLFwiZmxleFwiKTtcblxuICAgIGlmIChpZCAhPT0gdGl0bGUpIHtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibmV3VG9kb1wiKTtcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9IFwiTmV3XCI7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCggdG9kb0RpdihpdGVtKSApO1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiB0b2RvRGl2KGl0ZW0pIHtcbiAgICBsZXQgaWQgPSBpdGVtLmdldElkKCk7XG4gICAgbGV0IG5hbWUgPSBpdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBkYXRlID0gaXRlbS5nZXREYXRlKCk7XG4gICAgbGV0IGRkID0gYCR7ZGF0ZS5nZXREYXRlKCl9YC5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGxldCBtbSA9IGAke2RhdGUuZ2V0TW9udGgoKSArIDF9YC5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGxldCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGRhdGUgPSBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcblxuICAgIGxldCBwcmlvcml0eSA9IGl0ZW0uZ2V0UHJpb3JpdHkoKTtcbiAgICBsZXQgc3RhdHVzID0gaXRlbS5nZXRTdGF0dXMoKTtcblxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiLFwiZmxleFwiLHByaW9yaXR5KTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvXCIsYCR7aWR9YCk7XG5cbiAgICBsZXQgbGVmdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdGRpdi5jbGFzc0xpc3QuYWRkKFwibGVmdFwiLFwiZmxleFwiKTtcblxuICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gICAgfWVsc2Uge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGxldCBkZCA9IGAke3RvZGF5LmdldERhdGUoKX1gLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGxldCBtbSA9IGAke3RvZGF5LmdldE1vbnRoKCkgKyAxfWAucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0b2RheSA9IG1tICsgJy8nICsgZGQgKyAnLycgKyB5eXl5O1xuXG4gICAgICAgIGlmKCAhaXNTYW1lRGF5KCBuZXcgRGF0ZSh0b2RheSksIG5ldyBEYXRlKGRhdGUpKSApe1xuICAgICAgICAgICAgaWYgKCBjb21wYXJlQXNjKCBuZXcgRGF0ZSh0b2RheSksIG5ldyBEYXRlKGRhdGUpICkgPiAwICkge1xuICAgICAgICAgICAgICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJvdXRkYXRlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZWRpdFRvZG9cIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gbmFtZTtcblxuICAgIGxlZnRkaXYuYXBwZW5kKGNoZWNrQm94LHRpdGxlKTtcblxuXG4gICAgbGV0IHJpZ2h0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByaWdodGRpdi5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIixcImZsZXhcIik7XG5cbiAgICBsZXQgZGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkYXRlU3Bhbi5pbm5lclRleHQgPSBkYXRlO1xuXG4gICAgbGV0IHByaW9yaXR5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByaW9yaXR5U3Bhbi5pbm5lclRleHQgPSBwcmlvcml0eTtcblxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsVG9kb1wiLFwicmVkXCIpO1xuICAgIGJ0bi5pbm5lclRleHQgPSBcIlhcIjtcblxuICAgIHJpZ2h0ZGl2LmFwcGVuZChkYXRlU3Bhbixwcmlvcml0eVNwYW4sYnRuKTtcblxuICAgIGRpdi5hcHBlbmQobGVmdGRpdixyaWdodGRpdik7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RWaWV3KHByb2plY3Qpe1xuICAgIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVcIik7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGlkID0gcHJvamVjdC5nZXRJZCgpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLGAke2lkfWApO1xuICAgIGRpdi5pbm5lclRleHQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICBhc2lkZS5pbnNlcnRCZWZvcmUoIGRpdixhc2lkZS5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RcIikgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbFByb2plY3RWaWV3KHByb2plY3RMaXN0KXtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVcIikpXG4gICAgYm9keS5pbnNlcnRCZWZvcmUoIGFzaWRlKHByb2plY3RMaXN0KSAsIG1haW4gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9Gb3JtKHRvZG9JZCxwcm9qZWN0SUQpe1xuICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvRm9ybVwiLFwiZmxleFwiKTtcbiAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIuaW5uZXJUZXh0ID0gXCJBZGQgTmV3IFRvZG9cIjtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGgyKTtcblxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcbiAgICBsZXQgcHJpb3JpdHlMaXN0ID0gW1wiaGlnaFwiLFwibWlkXCIsXCJsb3dcIl07XG5cbiAgICBsZXQgbmFtZSxkZXNjLGRhdGUscHJpb3JpdHk7XG4gICAgaWYgKHRvZG9JZCA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgbmFtZSA9IFwiTmV3IFRvZG8gTmFtZVwiOyBcbiAgICAgICAgZGVzYyA9IFwiTmV3IFRvZG8gRGVzY3JpcHRpb25cIjsgXG5cbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBkZCA9IGAke2RhdGUuZ2V0RGF0ZSgpfWAucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgbGV0IG1tID0gYCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGxldCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBkYXRlID0gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xuXG4gICAgICAgIHByaW9yaXR5ID0gXCJoaWdoXCI7XG4gICAgfWVsc2V7XG4gICAgICAgIGxldCB0b2RvID0gZ2V0VG9kb0RhdGEodG9kb0lkKTtcbiAgICAgICAgbmFtZSA9IHRvZG8uZ2V0TmFtZSgpO1xuICAgICAgICBkZXNjID0gdG9kby5nZXREZXNjKCk7XG5cbiAgICAgICAgZGF0ZSA9IHRvZG8uZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgZGQgPSBgJHtkYXRlLmdldERhdGUoKX1gLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGxldCBtbSA9IGAke2RhdGUuZ2V0TW9udGgoKSArIDF9YC5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBsZXQgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZGF0ZSA9IGAke3l5eXl9LSR7bW19LSR7ZGR9YDtcblxuICAgICAgICBwcmlvcml0eSA9IHRvZG8uZ2V0UHJpb3JpdHkoKTtcbiAgICB9XG5cbiAgICBsZXQgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xuICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidG9kb05hbWVcIik7XG4gICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsXCJyZXF1aXJlZFwiKTtcbiAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKFwidmFsdWVcIixuYW1lKTtcblxuICAgIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidG9kb0Rlc2NcIik7XG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixkZXNjKTtcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsXCI1MFwiKTtcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsXCIxMFwiKTtcbiAgICB0ZXh0QXJlYS5pbm5lclRleHQgPSBkZXNjO1xuXG4gICAgbGV0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJkYXRlXCIpO1xuICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidG9kb0RhdGVcIik7XG4gICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsZGF0ZSk7XG5cbiAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIixcInRvZG9Qcmlvcml0eVwiKTtcbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBwcmlvcml0eUxpc3QpIHtcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLG9wdGlvbik7XG4gICAgICAgIG9wdC5pbm5lclRleHQgPSBvcHRpb247XG4gICAgICAgIGlmKG9wdGlvbiA9PT0gcHJpb3JpdHkpIG9wdC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIilcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfVxuICAgIGlucHV0RGl2LmFwcGVuZChpbnB1dERhdGUsc2VsZWN0KTtcblxuICAgIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzYXZlVG9kb1wiKTtcbiAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kb1wiLHRvZG9JZCk7XG4gICAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIixwcm9qZWN0SUQpO1xuICAgIHNhdmVCdG4uY2xhc3NMaXN0LmFkZChcImdyZWVuXCIpO1xuICAgIHNhdmVCdG4uaW5uZXJUZXh0ID0gXCJTYXZlXCI7XG4gICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsXCJjYW5jZWxcIilcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgICBidG5EaXYuYXBwZW5kKHNhdmVCdG4sY2FuY2VsQnRuKTtcblxuICAgIGZvcm0uYXBwZW5kKGlucHV0TmFtZSx0ZXh0QXJlYSxpbnB1dERpdixidG5EaXYpO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gICAgd3JhcHBlci5pbnNlcnRCZWZvcmUoIHRvZG9EaXYgLCB3cmFwcGVyLmZpcnN0Q2hpbGQgKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBhZ2VMb2FkLCBzaG93VG9kb3NGdW5jLCBcbiAgICAgICAgbmV3UHJvamVjdEZ1bmMsIGRlbFByb2plY3RGdW5jLCBcbiAgICAgICAgdG9kb0Zvcm1TaG93LCBuZXdUb2RvRnVuYywgZWRpdFRvZG9GdW5jLCBkZWxUb2RvRnVuYywgY2hhbmdlU3RhdHVzRnVuYyB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxucGFnZUxvYWQoKTtcbmFzaWRlRXZlbnRzKCk7XG5cbmZ1bmN0aW9uIGFzaWRlRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0cycpLmZvckVhY2goXG4gICAgICAgIChpdGVtKT0+e1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1RvZG9zKGlkLFwiYWxsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIClcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgICgpPT57XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFRpdGxlXCIpLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIGlmKCAhbmFtZS5sZW5ndGggKSBuYW1lID0gXCJOZXcgUHJvamVjdFwiXG4gICAgICAgICAgICBuZXdQcm9qZWN0KG5hbWUpO1xuICAgICAgICB9XG4gICAgKVxufVxuXG5zaG93VG9kb3MoXCJhbGxcIixcImFsbFwiKTtcblxuZnVuY3Rpb24gc2hvd1RvZG9zKHByb2plY3RJZCxmaWx0ZXIpIHtcbiAgICBzaG93VG9kb3NGdW5jKHByb2plY3RJZCxmaWx0ZXIpO1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsUHJvXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsUHJvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgICAgICBkZWxQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsXG4gICAgICAgIChlKT0+e1xuICAgICAgICAgICAgbGV0IGZpbHRlciA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgc2hvd1RvZG9zKHByb2plY3RJZCxmaWx0ZXIpO1xuICAgICAgICB9XG4gICAgKVxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VG9kb1wiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1RvZG9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgICAgIHRvZG9mb3JtKFwibm9uZVwiLHByb2plY3RJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKS5mb3JFYWNoKFxuICAgICAgICAoaXRlbSk9PntcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gaXRlbS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2RvXCIpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VTdGF0dXMoaWQscHJvamVjdElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICApXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdFRvZG8nKS5mb3JFYWNoKFxuICAgICAgICAoaXRlbSk9PntcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gaXRlbS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2RvXCIpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvZm9ybShpZCxwcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIClcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxUb2RvJykuZm9yRWFjaChcbiAgICAgICAgKGl0ZW0pPT57XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICAgICAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGl0ZW0ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtdG9kb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsVG9kbyhpZCxwcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIClcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdChuYW1lKSB7XG4gICAgbGV0IGlkID0gbmV3UHJvamVjdEZ1bmMobmFtZSk7XG4gICAgaWYgKGlkID09PSBcImVycm9yXCIpIGFsZXJ0KFwiQ2hhbmdlIG5hbWUsIHRoaXMgb25lIGlzIGFscmVhZHkgdXNlZC5cIilcbiAgICBlbHNle1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdHNbZGF0YS1wcm9qZWN0PVwiJHtpZH1cIl1gKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICAgICAgc2hvd1RvZG9zKGlkLFwiYWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBzaG93VG9kb3MoIGlkLCBcImFsbFwiICk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxQcm9qZWN0KGlkKSB7XG4gICAgZGVsUHJvamVjdEZ1bmMoaWQpO1xuICAgIGFzaWRlRXZlbnRzKCk7XG4gICAgc2hvd1RvZG9zRnVuYyggXCJhbGxcIiwgXCJhbGxcIiApO1xufVxuXG5mdW5jdGlvbiB0b2RvZm9ybShpZCxwcm9qZWN0SWQpIHtcbiAgICB0b2RvRm9ybVNob3coaWQscHJvamVjdElkKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVUb2RvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICAgICAgICAoZSk9PntcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvTmFtZVwiKS52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZighbmFtZS5sZW5ndGgpIG5hbWUgPSBcIk5ldyB0b2RvXCJcblxuICAgICAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjXCIpLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIGlmKCFkZXNjLmxlbmd0aCkgZGVzYyA9IFwiTmV3IHRvZG8gZGVzY1wiXG5cbiAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRGF0ZVwiKS52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZighZGF0ZS5sZW5ndGgpIGRhdGUgPSBcIjAxLzAxLzIwMjBcIlxuXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Qcmlvcml0eVwiKS52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZighcHJpb3JpdHkubGVuZ3RoKSBwcmlvcml0eSA9IFwibWlkXCJcblxuICAgICAgICAgICAgaWYoaWQgIT09IFwibm9uZVwiKSBlZGl0VG9kbyhuYW1lLGlkLHByb2plY3RJZCxkZXNjLGRhdGUscHJpb3JpdHkpO1xuICAgICAgICAgICAgZWxzZSBuZXdUb2RvKG5hbWUscHJvamVjdElkLGRlc2MsZGF0ZSxwcmlvcml0eSk7XG4gICAgICAgIH1cbiAgICApXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgKGUpPT57XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvRm9ybVwiKVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgKVxufVxuXG5mdW5jdGlvbiBuZXdUb2RvKG5hbWUscHJvamVjdElkLGRlc2MsZGF0ZSxwcmlvcml0eSl7XG4gICAgaWYoIG5ld1RvZG9GdW5jKG5hbWUscHJvamVjdElkLGRlc2MsZGF0ZSxwcmlvcml0eSkgPT09IFwiZG9uZVwiICl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Zvcm1cIilcbiAgICAgICAgKVxuICAgICAgICBzaG93VG9kb3MocHJvamVjdElkLGZpbHRlcj1cImFsbFwiKTtcbiAgICB9ZWxzZSBhbGVydChcIlBsZWFzZSBjaGFuZ2UgbmFtZVwiKTtcbn1cblxuXG5mdW5jdGlvbiBlZGl0VG9kbyhuYW1lLHRvZG9JZCxwcm9qZWN0SWQsZGVzYyxkYXRlLHByaW9yaXR5KXtcbiAgICBpZiggZWRpdFRvZG9GdW5jKG5hbWUsdG9kb0lkLGRlc2MsZGF0ZSxwcmlvcml0eSkgPT09IFwiZG9uZVwiICl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Zvcm1cIilcbiAgICAgICAgKVxuICAgICAgICBzaG93VG9kb3MocHJvamVjdElkLGZpbHRlcj1cImFsbFwiKTtcbiAgICB9ZWxzZSBhbGVydChcIlBsZWFzZSBjaGFuZ2UgbmFtZVwiKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VTdGF0dXMoaWQscHJvamVjdElkKXtcbiAgICBjaGFuZ2VTdGF0dXNGdW5jKGlkKTtcbiAgICBzaG93VG9kb3MocHJvamVjdElkLFwiYWxsXCIpO1xufVxuXG5mdW5jdGlvbiBkZWxUb2RvKGlkLHByb2plY3RJZCl7XG4gICAgZGVsVG9kb0Z1bmMoaWQpO1xuICAgIHNob3dUb2Rvcyhwcm9qZWN0SWQsXCJhbGxcIik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9