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

    function setStatus(){
        isDone = !isDone;
    }

    function getStatus(){
        return isDone;
    }

    return{
        setName,getName,getId,getProjectId,setDesc,getDesc,
        setDate,getDate,setPriority,getPriority,setStatus,getStatus}
}

function addProjectData(name,id,output) {
    for (const item of projectList) {
        if (item.getName() === name) {
            return "error";
        }
    }
    let newProject = Project(name,id);
    projectList.push( newProject );
    if(output) return newProject;
}

function getProjectData(projectID) {
    for (const project of projectList) {
        if ( project.getId() === parseInt(projectID) ) return project
    }
}

function delProjectData(projectId) {
    projectList.splice(projectId,1);
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].getProjectId() === parseInt(projectId)) {
            todoList[i] = "delete";
        }
    }
    while(todoList.includes("delete")){
        for (let i = 0; i < todoList.length; i++) {
            if( todoList[i] === "delete" ) {
                todoList.splice(i,1);
                i = todoList.length;
            }
        }
    }
}

function addTodoData(name,id,projectId,description,date,priority,status,output) {
    for (const item of todoList) {
        if (item.getName() === name
            && item.getProjectId() === projectId) {
            return "error";
        }
    }
    let newTodo = Todo(name,id,projectId,description,date,priority,status);
    todoList.push( newTodo );
    if(output) return "done";
}

function getTodoData(todoID) {
    for (const todo of todoList) {
        if ( todo.getId() === parseInt(todoID) ) return todo
    }
}

function delTodoData(todoId) {
    todoList.splice(todoId,1);
}

function editTodoData(name,todoId,description,date,priority){
    let projectID = todoList[todoId].getProjectId();
    for(const item of todoList) {
        if(item.getName() === name && 
            item.getProjectId() === projectID ) {
            if( item.getId().toString() !== todoId ) {
                return "error";
            }
        }
    }
    todoList[todoId].setName(name);
    todoList[todoId].setDesc(description);
    todoList[todoId].setDate(date);
    todoList[todoId].setPriority(priority);
    return "done";
}

function changeStatusData( todoId ){
    let id = parseInt(todoId)
    todoList[id].setStatus();
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
        todoList = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getTodoList)().filter(
            (item)=> item.getProjectId() === parseInt(idProject)
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
            let name = document.querySelector("#addProjectTitle").value;
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
            let name = document.querySelector("#todoName").value;
            let desc = document.querySelector("#todoDesc").value;
            let date = document.querySelector("#todoDate").value;
            let priority = document.querySelector("#todoPriority").value;
            if(id==="none"){
                newTodo(name,projectId,desc,date,priority);
            }else{
                editTodo(name,id,projectId,desc,date,priority);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxJQUFJLHVEQUFXO0FBQ2Y7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImNvbnN0IHByb2plY3RMaXN0ID0gW107IGdldFNhdmVkUHJvamVjdHMoKTtcblxuZnVuY3Rpb24gZ2V0U2F2ZWRQcm9qZWN0cygpe1xuICAgIGxldCBwcm9qZWN0c1NhdmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpIHx8IFwiW11cIik7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RzU2F2ZWQpIHtcbiAgICAgICAgbGV0IGlkID0gcHJvamVjdFswXTtcbiAgICAgICAgbGV0IG5hbWUgPSBwcm9qZWN0WzFdO1xuICAgICAgICBhZGRQcm9qZWN0RGF0YShuYW1lLGlkLGZhbHNlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdHMoKXtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICBsZXQgc2F2ZSA9IFtdO1xuICAgICAgICBzYXZlLnB1c2goXG4gICAgICAgICAgICBwcm9qZWN0LmdldElkKCksXG4gICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKVxuICAgICAgICApXG4gICAgICAgIGxpc3QucHVzaChzYXZlKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShsaXN0KSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHNMaXN0KCkge1xuICAgIGxldCBsaXN0ID0gcHJvamVjdExpc3Q7XG4gICAgcmV0dXJuIGxpc3Q7XG59XG5cbmNvbnN0IHRvZG9MaXN0ID0gW107IGdldFNhdmVkVG9kb3MoKTtcblxuZnVuY3Rpb24gZ2V0U2F2ZWRUb2Rvcygpe1xuICAgIGxldCB0b2Rvc1NhdmVkID0gSlNPTi5wYXJzZSggbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSB8fCBcIltdXCIgKVxuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvc1NhdmVkKSB7XG4gICAgICAgIGxldCBpZCA9IHRvZG9bMF07XG4gICAgICAgIGxldCBuYW1lID0gdG9kb1sxXTtcbiAgICAgICAgbGV0IHByb2plY3RJZCA9IHRvZG9bMl07XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRvZG9bM107XG4gICAgICAgIGxldCBkYXRlID0gdG9kb1s0XTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gdG9kb1s1XTtcbiAgICAgICAgbGV0IHN0YXR1cyA9IHRvZG9bNl07XG4gICAgICAgIGFkZFRvZG9EYXRhKG5hbWUsaWQscHJvamVjdElkLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHksc3RhdHVzLGZhbHNlKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb2Rvcygpe1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9MaXN0KSB7XG4gICAgICAgIGxldCBzYXZlID0gW107XG4gICAgICAgIHNhdmUucHVzaChcbiAgICAgICAgICAgIHRvZG8uZ2V0SWQoKSxcbiAgICAgICAgICAgIHRvZG8uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdG9kby5nZXRQcm9qZWN0SWQoKSxcbiAgICAgICAgICAgIHRvZG8uZ2V0RGVzYygpLFxuICAgICAgICAgICAgdG9kby5nZXREYXRlKCksXG4gICAgICAgICAgICB0b2RvLmdldFByaW9yaXR5KCksXG4gICAgICAgICAgICB0b2RvLmdldFN0YXR1cygpXG4gICAgICAgIClcbiAgICAgICAgbGlzdC5wdXNoKHNhdmUpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KGxpc3QpICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvTGlzdCgpIHtcbiAgICBsZXQgbGlzdCA9IHRvZG9MaXN0O1xuICAgIHJldHVybiBsaXN0O1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0KG5hbWVJbnB1dCxpZElucHV0KXtcblxuICAgIGxldCBuYW1lID0gbmFtZUlucHV0O1xuICAgIGxldCBpZCA9IDA7XG4gICAgaWYoaWRJbnB1dCA9PT0gXCJuZXdcIil7XG4gICAgICAgIGlmICggcHJvamVjdExpc3QubGVuZ3RoICl7XG4gICAgICAgICAgICBsZXQgbGFzdCA9IHByb2plY3RMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZCA9IHByb2plY3RMaXN0W2xhc3RdLmdldElkKCkgKyAxO1xuICAgICAgICB9XG4gICAgfWVsc2UgaWQgPSBpZElucHV0XG5cbiAgICBmdW5jdGlvbiBnZXRJZCgpe1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TmFtZShuYW1lKXtcbiAgICAgICAgbmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm57Z2V0SWQsc2V0TmFtZSxnZXROYW1lfTtcbn1cblxuZnVuY3Rpb24gVG9kbyhuYW1lSW5wdXQsaWRJbnB1dCxwcm9qZWN0SWRJbnB1dCxkZXNjcmlwdGlvbklucHV0LGRhdGVJbnB1dCxwcmlvcml0eUlucHV0LHN0YXR1cyl7XG4gICAgbGV0IG5hbWUgPSBuYW1lSW5wdXQ7XG4gICAgbGV0IGlkID0gMDtcbiAgICBpZihpZElucHV0ID09PSBcIm5ld1wiKXtcbiAgICAgICAgaWYgKHRvZG9MaXN0Lmxlbmd0aCl7XG4gICAgICAgICAgICBsZXQgbGFzdCA9IHRvZG9MaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZCA9IHRvZG9MaXN0W2xhc3RdLmdldElkKCkgKyAxO1xuICAgICAgICB9XG4gICAgfWVsc2UgaWQgPSBpZElucHV0XG5cbiAgICBsZXQgcHJvamVjdElkID0gcHJvamVjdElkSW5wdXQ7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dDtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGAke2RhdGVJbnB1dH1gKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBwcmlvcml0eUlucHV0O1xuICAgIGxldCBpc0RvbmUgPSBzdGF0dXM7XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0TmFtZShuZXdOYW1lKXtcbiAgICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJZCgpe1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdElkKCl7XG4gICAgICAgIHJldHVybiBwcm9qZWN0SWQ7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNldERlc2MoZGVzY3JpcHRpb24pe1xuICAgICAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERlc2MoKXtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZXREYXRlKG5ld0RhdGUpe1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoYCR7bmV3RGF0ZX1gKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXRlKCl7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KXtcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0eSgpe1xuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RhdHVzKCl7XG4gICAgICAgIGlzRG9uZSA9ICFpc0RvbmU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCl7XG4gICAgICAgIHJldHVybiBpc0RvbmU7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBzZXROYW1lLGdldE5hbWUsZ2V0SWQsZ2V0UHJvamVjdElkLHNldERlc2MsZ2V0RGVzYyxcbiAgICAgICAgc2V0RGF0ZSxnZXREYXRlLHNldFByaW9yaXR5LGdldFByaW9yaXR5LHNldFN0YXR1cyxnZXRTdGF0dXN9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0RGF0YShuYW1lLGlkLG91dHB1dCkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICBpZiAoaXRlbS5nZXROYW1lKCkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBcImVycm9yXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5hbWUsaWQpO1xuICAgIHByb2plY3RMaXN0LnB1c2goIG5ld1Byb2plY3QgKTtcbiAgICBpZihvdXRwdXQpIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdERhdGEocHJvamVjdElEKSB7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgICAgIGlmICggcHJvamVjdC5nZXRJZCgpID09PSBwYXJzZUludChwcm9qZWN0SUQpICkgcmV0dXJuIHByb2plY3RcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxQcm9qZWN0RGF0YShwcm9qZWN0SWQpIHtcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UocHJvamVjdElkLDEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRvZG9MaXN0W2ldLmdldFByb2plY3RJZCgpID09PSBwYXJzZUludChwcm9qZWN0SWQpKSB7XG4gICAgICAgICAgICB0b2RvTGlzdFtpXSA9IFwiZGVsZXRlXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2hpbGUodG9kb0xpc3QuaW5jbHVkZXMoXCJkZWxldGVcIikpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiggdG9kb0xpc3RbaV0gPT09IFwiZGVsZXRlXCIgKSB7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgaSA9IHRvZG9MaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9EYXRhKG5hbWUsaWQscHJvamVjdElkLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHksc3RhdHVzLG91dHB1dCkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0b2RvTGlzdCkge1xuICAgICAgICBpZiAoaXRlbS5nZXROYW1lKCkgPT09IG5hbWVcbiAgICAgICAgICAgICYmIGl0ZW0uZ2V0UHJvamVjdElkKCkgPT09IHByb2plY3RJZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgbmV3VG9kbyA9IFRvZG8obmFtZSxpZCxwcm9qZWN0SWQsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSxzdGF0dXMpO1xuICAgIHRvZG9MaXN0LnB1c2goIG5ld1RvZG8gKTtcbiAgICBpZihvdXRwdXQpIHJldHVybiBcImRvbmVcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9EYXRhKHRvZG9JRCkge1xuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2RvTGlzdCkge1xuICAgICAgICBpZiAoIHRvZG8uZ2V0SWQoKSA9PT0gcGFyc2VJbnQodG9kb0lEKSApIHJldHVybiB0b2RvXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsVG9kb0RhdGEodG9kb0lkKSB7XG4gICAgdG9kb0xpc3Quc3BsaWNlKHRvZG9JZCwxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb2RvRGF0YShuYW1lLHRvZG9JZCxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5KXtcbiAgICBsZXQgcHJvamVjdElEID0gdG9kb0xpc3RbdG9kb0lkXS5nZXRQcm9qZWN0SWQoKTtcbiAgICBmb3IoY29uc3QgaXRlbSBvZiB0b2RvTGlzdCkge1xuICAgICAgICBpZihpdGVtLmdldE5hbWUoKSA9PT0gbmFtZSAmJiBcbiAgICAgICAgICAgIGl0ZW0uZ2V0UHJvamVjdElkKCkgPT09IHByb2plY3RJRCApIHtcbiAgICAgICAgICAgIGlmKCBpdGVtLmdldElkKCkudG9TdHJpbmcoKSAhPT0gdG9kb0lkICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImVycm9yXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9kb0xpc3RbdG9kb0lkXS5zZXROYW1lKG5hbWUpO1xuICAgIHRvZG9MaXN0W3RvZG9JZF0uc2V0RGVzYyhkZXNjcmlwdGlvbik7XG4gICAgdG9kb0xpc3RbdG9kb0lkXS5zZXREYXRlKGRhdGUpO1xuICAgIHRvZG9MaXN0W3RvZG9JZF0uc2V0UHJpb3JpdHkocHJpb3JpdHkpO1xuICAgIHJldHVybiBcImRvbmVcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVN0YXR1c0RhdGEoIHRvZG9JZCApe1xuICAgIGxldCBpZCA9IHBhcnNlSW50KHRvZG9JZClcbiAgICB0b2RvTGlzdFtpZF0uc2V0U3RhdHVzKCk7XG59IiwiaW1wb3J0IHsgaXNTYW1lV2VlaywgaXNTYW1lRGF5LCBjb21wYXJlQXNjLCBjb21wYXJlRGVzYyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7ICAgIHNhdmVQcm9qZWN0cywgZ2V0UHJvamVjdHNMaXN0LCBhZGRQcm9qZWN0RGF0YSwgZ2V0UHJvamVjdERhdGEsIGRlbFByb2plY3REYXRhLFxuICAgICAgICAgICAgc2F2ZVRvZG9zLCBnZXRUb2RvTGlzdCwgYWRkVG9kb0RhdGEsIGVkaXRUb2RvRGF0YSwgZ2V0VG9kb0RhdGEsIGRlbFRvZG9EYXRhLCBjaGFuZ2VTdGF0dXNEYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IHNldExheW91dCwgdG9kb3NWaWV3LCBhZGRQcm9qZWN0VmlldywgdG9kb0Zvcm0sIGRlbFByb2plY3RWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWQoKXtcblxuICAgIGxldCBwcm9qZWN0TGlzdCA9IGdldFByb2plY3RzTGlzdCgpO1xuICAgIHByb2plY3RMaXN0LnNvcnQoXG4gICAgICAgIChhLGIpPT57XG4gICAgICAgICAgICByZXR1cm4gYS5nZXROYW1lKCkubG9jYWxlQ29tcGFyZSggIGIuZ2V0TmFtZSgpICk7XG4gICAgICAgIH1cbiAgICApO1xuICAgIHNldExheW91dChwcm9qZWN0TGlzdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VG9kb3NGdW5jKGlkLGZpbHRlcil7XG4gICAgbGV0IGlkUHJvamVjdCA9IGlkO1xuICAgIGxldCB0b2RvTGlzdCA9IGdldFRvZG9CeUlEKGlkUHJvamVjdCk7XG5cbiAgICBpZiAoZmlsdGVyICE9PSBcImFsbFwiKSB7XG4gICAgICAgIHRvZG9MaXN0ID0gZmlsdGVyVG9kbyh0b2RvTGlzdCxmaWx0ZXIpO1xuICAgIH1cblxuICAgIHRvZG9MaXN0LnNvcnQoIFxuICAgICAgICAoYSxiKT0+IGNvbXBhcmVBc2MoIGEuZ2V0RGF0ZSgpLGIuZ2V0RGF0ZSgpIClcbiAgICApXG4gICAgbGV0IHRpdGxlID0gaWQ7XG4gICAgaWYgKHRpdGxlICE9PSBcImFsbFwiICYmXG4gICAgICAgIHRpdGxlICE9PSBcImRheVwiICYmXG4gICAgICAgIHRpdGxlICE9PSBcIndlZWtcIlxuICAgICAgICApIHtcbiAgICAgICAgdGl0bGUgPSBnZXRQcm9qZWN0RGF0YShpZCkuZ2V0TmFtZSgpO1xuICAgIH1cbiAgICB0b2Rvc1ZpZXcoaWQsIHRpdGxlLCB0b2RvTGlzdCwgZmlsdGVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9kb0J5SUQoaWRQcm9qZWN0KXtcbiAgICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgICBpZihpZFByb2plY3QgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgdG9kb0xpc3QgPSBnZXRUb2RvTGlzdCgpO1xuICAgIH1lbHNlIGlmKCBpZFByb2plY3QgPT09IFwiZGF5XCIgKXtcbiAgICAgICAgdG9kb0xpc3QgPSBnZXRUb2RvTGlzdCgpLmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKT0+IGlzU2FtZURheSggbmV3IERhdGUoKSwgaXRlbS5nZXREYXRlKCkgKVxuICAgICAgICApXG4gICAgfWVsc2UgaWYoIGlkUHJvamVjdCA9PT0gXCJ3ZWVrXCIgKXtcbiAgICAgICAgdG9kb0xpc3QgPSBnZXRUb2RvTGlzdCgpLmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKT0+IGlzU2FtZVdlZWsoIG5ldyBEYXRlKCksIGl0ZW0uZ2V0RGF0ZSgpIClcbiAgICAgICAgKVxuICAgIH1lbHNle1xuICAgICAgICB0b2RvTGlzdCA9IGdldFRvZG9MaXN0KCkuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pPT4gaXRlbS5nZXRQcm9qZWN0SWQoKSA9PT0gcGFyc2VJbnQoaWRQcm9qZWN0KVxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG9MaXN0O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJUb2RvKHRvZG9MaXN0LGZpbHRlcikge1xuICAgIGxldCBuZXdsaXN0ID0gW107XG4gICAgaWYgKGZpbHRlciA9PT0gXCJkb25lXCIpIHtcbiAgICAgICAgbmV3bGlzdCA9IHRvZG9MaXN0LmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKT0+IGl0ZW0uZ2V0U3RhdHVzKClcbiAgICAgICAgKVxuICAgIH1lbHNlIGlmIChmaWx0ZXIgPT09IFwibm90XCIpIHtcbiAgICAgICAgbmV3bGlzdCA9IHRvZG9MaXN0LmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmKCAhaXNTYW1lRGF5KHRvZGF5LGl0ZW0uZ2V0RGF0ZSgpKSApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWl0ZW0uZ2V0U3RhdHVzKCkgJiYgKCAoIGNvbXBhcmVBc2MoIHRvZGF5LCBpdGVtLmdldERhdGUoKSApIDw9IDAgKSApXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXRlbS5nZXRTdGF0dXMoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1lbHNlIGlmIChmaWx0ZXIgPT09IFwib3V0XCIpIHtcbiAgICAgICAgbmV3bGlzdCA9IHRvZG9MaXN0LmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmKCAhaXNTYW1lRGF5KHRvZGF5LGl0ZW0uZ2V0RGF0ZSgpKSApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWl0ZW0uZ2V0U3RhdHVzKCkgJiYgKCBjb21wYXJlQXNjKCB0b2RheSwgaXRlbS5nZXREYXRlKCkgKSA+IDAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbmV3bGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Byb2plY3RGdW5jKG5hbWUpIHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IGFkZFByb2plY3REYXRhKG5hbWUsXCJuZXdcIix0cnVlKTtcbiAgICBpZiAobmV3UHJvamVjdCA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgIHJldHVybiBcImVycm9yXCI7XG4gICAgfVxuICAgIGFkZFByb2plY3RWaWV3KG5ld1Byb2plY3QpO1xuICAgIHNhdmVQcm9qZWN0cygpO1xuICAgIGxldCBpZCA9IG5ld1Byb2plY3QuZ2V0SWQoKTtcbiAgICByZXR1cm4gaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxQcm9qZWN0RnVuYyhpZCkge1xuICAgIGRlbFByb2plY3REYXRhKGlkKTtcbiAgICBkZWxQcm9qZWN0VmlldyhnZXRQcm9qZWN0c0xpc3QoKSk7XG4gICAgc2F2ZVByb2plY3RzKCk7XG4gICAgc2F2ZVRvZG9zKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvRm9ybVNob3coaWQscHJvamVjdElkKXtcbiAgICB0b2RvRm9ybShpZCxwcm9qZWN0SWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3VG9kb0Z1bmMobmFtZSxwcm9qZWN0SWQsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSl7XG4gICAgbGV0IG91dHB1dCA9IGFkZFRvZG9EYXRhKG5hbWUsXCJuZXdcIixwcm9qZWN0SWQsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSxmYWxzZSx0cnVlKTtcbiAgICBpZiAob3V0cHV0PT09XCJkb25lXCIpIHNhdmVUb2RvcygpO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VG9kb0Z1bmMobmFtZSx0b2RvSWQsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSl7XG4gICAgbGV0IG91dHB1dCA9IGVkaXRUb2RvRGF0YShuYW1lLHRvZG9JZCxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5KTsgXG4gICAgaWYgKG91dHB1dD09PVwiZG9uZVwiKSBzYXZlVG9kb3MoKTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlU3RhdHVzRnVuYyhpZCl7XG4gICAgY2hhbmdlU3RhdHVzRGF0YShpZCk7XG4gICAgc2F2ZVRvZG9zKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxUb2RvRnVuYyhpZCl7XG4gICAgZGVsVG9kb0RhdGEoaWQpO1xuICAgIHNhdmVUb2RvcygpO1xufSIsImltcG9ydCB7IGNvbXBhcmVBc2MsIGlzU2FtZURheSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGdldFRvZG9EYXRhIH0gZnJvbSAnLi9kYXRhJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGF5b3V0KHByb2plY3RMaXN0KXtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICAgIGxldCBoZWFkID0gaGVhZGVyKCk7XG4gICAgbGV0IGFzaWQgPSBhc2lkZShwcm9qZWN0TGlzdCk7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIixcImZsZXhcIik7XG4gICAgYm9keS5hcHBlbmQoaGVhZCxhc2lkLG1haW4pO1xufVxuXG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIixcImZsZXhcIik7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiVG8gRG8gQXBwIC0gVGhlIE9kaW4gUHJvamVjdFwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gYXNpZGUocHJvamVjdExpc3QpIHtcbiAgICBsZXQgYXNpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXNpZC5jbGFzc0xpc3QuYWRkKFwiYXNpZGVcIixcImZsZXhcIik7XG4gICAgY29uc3QgbGlzdCA9IHByb2plY3RMaXN0O1xuXG4gICAgbGV0IGFsbFBybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWxsUHJvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiLFwic2VsZWN0ZWRcIik7XG4gICAgYWxsUHJvLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLFwiYWxsXCIpXG4gICAgYWxsUHJvLmlubmVyVGV4dCA9IFwiQWxsXCI7XG4gICAgYXNpZC5hcHBlbmRDaGlsZChhbGxQcm8pO1xuICAgIFxuICAgIGxldCBkYXlQcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRheVByby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gICAgZGF5UHJvLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLFwiZGF5XCIpXG4gICAgZGF5UHJvLmlubmVyVGV4dCA9IFwiVG9kYXlcIjtcbiAgICBhc2lkLmFwcGVuZENoaWxkKGRheVBybyk7XG5cbiAgICBsZXQgd2Vla1BybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2Vla1Byby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gICAgd2Vla1Byby5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIixcIndlZWtcIilcbiAgICB3ZWVrUHJvLmlubmVyVGV4dCA9IFwiVGhpcyBXZWVrXCI7XG4gICAgYXNpZC5hcHBlbmRDaGlsZCh3ZWVrUHJvKTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsYCR7aXRlbS5nZXRJZCgpfWApXG4gICAgICAgIGRpdi5pbm5lclRleHQgPSBpdGVtLmdldE5hbWUoKTtcbiAgICAgICAgYXNpZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIGxldCBhZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0XCIsXCJmbGV4XCIpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWRkUHJvamVjdFRpdGxlXCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIk5ldyBQcm9qZWN0XCIpO1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsXCJhZGRQcm9qZWN0QnRuXCIpO1xuICAgIGJ0bi5pbm5lclRleHQgPSBcIkFkZFwiO1xuICAgIGFkZEZvcm0uYXBwZW5kKGlucHV0LGJ0bik7XG4gICAgYXNpZC5hcHBlbmRDaGlsZChhZGRGb3JtKTtcbiAgICByZXR1cm4gYXNpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9zVmlldyhpZCx0aXRsZSx0b2RvTGlzdCxmaWx0ZXIpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kKFxuICAgICAgICB0b2RvVmlld0hlYWQoaWQsdGl0bGUsZmlsdGVyKSxcbiAgICAgICAgdG9kb1ZpZXdCb2R5KGlkLHRpdGxlLHRvZG9MaXN0KVxuICAgICk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RzW2RhdGEtcHJvamVjdD1cIiR7aWR9XCJdYCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiB0b2RvVmlld0hlYWQoaWQsdGl0bGUsZmlsdGVyKXtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImhlYWRcIixcImZsZXhcIik7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLGAke2lkfWApXG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoMik7XG4gICAgaWYgKGlkICE9PSB0aXRsZSkge1xuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZGVsUHJvXCIpO1xuICAgICAgICBidG4uaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfVxuICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZmlsdGVyXCIpO1xuXG4gICAgbGV0IG9wdGlvbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbjAuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcImFsbFwiKTtcbiAgICBpZihmaWx0ZXIgPT09IFwiYWxsXCIpIG9wdGlvbjAuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpXG4gICAgb3B0aW9uMC5pbm5lclRleHQgPSBcIkFsbFwiO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24wKTtcblxuICAgIGxldCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24xLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJkb25lXCIpO1xuICAgIGlmKGZpbHRlciA9PT0gXCJkb25lXCIpIG9wdGlvbjEuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpXG4gICAgb3B0aW9uMS5pbm5lclRleHQgPSBcIkRvbmVcIjtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG5cbiAgICBsZXQgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uMi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwibm90XCIpO1xuICAgIGlmKGZpbHRlciA9PT0gXCJub3RcIikgb3B0aW9uMi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIilcbiAgICBvcHRpb24yLmlubmVyVGV4dCA9IFwiTm90IERvbmVcIjtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG5cbiAgICBsZXQgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwib3V0XCIpO1xuICAgIGlmKGZpbHRlciA9PT0gXCJvdXRcIikgb3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIilcbiAgICBvcHRpb24zLmlubmVyVGV4dCA9IFwiT3V0IERhdGVkXCI7XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuICAgIFxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIHRvZG9WaWV3Qm9keShpZCx0aXRsZSx0b2RvTGlzdCl7XG4gICAgbGV0IGxpc3QgPSB0b2RvTGlzdDtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIixcImZsZXhcIik7XG5cbiAgICBpZiAoaWQgIT09IHRpdGxlKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImdyZWVuXCIpO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIixcIm5ld1RvZG9cIik7XG4gICAgICAgIGJ0bi5pbm5lclRleHQgPSBcIk5ld1wiO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoIHRvZG9EaXYoaXRlbSkgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gdG9kb0RpdihpdGVtKSB7XG4gICAgbGV0IGlkID0gaXRlbS5nZXRJZCgpO1xuICAgIGxldCBuYW1lID0gaXRlbS5nZXROYW1lKCk7XG5cbiAgICBsZXQgZGF0ZSA9IGl0ZW0uZ2V0RGF0ZSgpO1xuICAgIGxldCBkZCA9IGAke2RhdGUuZ2V0RGF0ZSgpfWAucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBsZXQgbW0gPSBgJHtkYXRlLmdldE1vbnRoKCkgKyAxfWAucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBsZXQgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBkYXRlID0gbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XG5cbiAgICBsZXQgcHJpb3JpdHkgPSBpdGVtLmdldFByaW9yaXR5KCk7XG4gICAgbGV0IHN0YXR1cyA9IGl0ZW0uZ2V0U3RhdHVzKCk7XG5cbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIixcImZsZXhcIixwcmlvcml0eSk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtdG9kb1wiLGAke2lkfWApO1xuXG4gICAgbGV0IGxlZnRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxlZnRkaXYuY2xhc3NMaXN0LmFkZChcImxlZnRcIixcImZsZXhcIik7XG5cbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgICAgICBsZXQgZGQgPSBgJHt0b2RheS5nZXREYXRlKCl9YC5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBsZXQgbW0gPSBgJHt0b2RheS5nZXRNb250aCgpICsgMX1gLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdG9kYXkgPSBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcblxuICAgICAgICBpZiggIWlzU2FtZURheSggbmV3IERhdGUodG9kYXkpLCBuZXcgRGF0ZShkYXRlKSkgKXtcbiAgICAgICAgICAgIGlmICggY29tcGFyZUFzYyggbmV3IERhdGUodG9kYXkpLCBuZXcgRGF0ZShkYXRlKSApID4gMCApIHtcbiAgICAgICAgICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwib3V0ZGF0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImVkaXRUb2RvXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IG5hbWU7XG5cbiAgICBsZWZ0ZGl2LmFwcGVuZChjaGVja0JveCx0aXRsZSk7XG5cblxuICAgIGxldCByaWdodGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHRkaXYuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIsXCJmbGV4XCIpO1xuXG4gICAgbGV0IGRhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZGF0ZVNwYW4uaW5uZXJUZXh0ID0gZGF0ZTtcblxuICAgIGxldCBwcmlvcml0eVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcmlvcml0eVNwYW4uaW5uZXJUZXh0ID0gcHJpb3JpdHk7XG5cbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImRlbFRvZG9cIixcInJlZFwiKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gXCJYXCI7XG5cbiAgICByaWdodGRpdi5hcHBlbmQoZGF0ZVNwYW4scHJpb3JpdHlTcGFuLGJ0bik7XG5cbiAgICBkaXYuYXBwZW5kKGxlZnRkaXYscmlnaHRkaXYpO1xuICAgIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0Vmlldyhwcm9qZWN0KXtcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlXCIpO1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBpZCA9IHByb2plY3QuZ2V0SWQoKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIixgJHtpZH1gKTtcbiAgICBkaXYuaW5uZXJUZXh0ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgYXNpZGUuaW5zZXJ0QmVmb3JlKCBkaXYsYXNpZGUucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxQcm9qZWN0Vmlldyhwcm9qZWN0TGlzdCl7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlXCIpKVxuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKCBhc2lkZShwcm9qZWN0TGlzdCkgLCBtYWluICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvRm9ybSh0b2RvSWQscHJvamVjdElEKXtcbiAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb0Zvcm1cIixcImZsZXhcIik7XG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLmlubmVyVGV4dCA9IFwiQWRkIE5ldyBUb2RvXCI7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChoMik7XG5cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XG4gICAgbGV0IHByaW9yaXR5TGlzdCA9IFtcImhpZ2hcIixcIm1pZFwiLFwibG93XCJdO1xuXG4gICAgbGV0IG5hbWUsZGVzYyxkYXRlLHByaW9yaXR5O1xuICAgIGlmICh0b2RvSWQgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIG5hbWUgPSBcIk5ldyBUb2RvIE5hbWVcIjsgXG4gICAgICAgIGRlc2MgPSBcIk5ldyBUb2RvIERlc2NyaXB0aW9uXCI7IFxuXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgZGQgPSBgJHtkYXRlLmdldERhdGUoKX1gLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGxldCBtbSA9IGAke2RhdGUuZ2V0TW9udGgoKSArIDF9YC5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBsZXQgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZGF0ZSA9IGAke3l5eXl9LSR7bW19LSR7ZGR9YDtcblxuICAgICAgICBwcmlvcml0eSA9IFwiaGlnaFwiO1xuICAgIH1lbHNle1xuICAgICAgICBsZXQgdG9kbyA9IGdldFRvZG9EYXRhKHRvZG9JZCk7XG4gICAgICAgIG5hbWUgPSB0b2RvLmdldE5hbWUoKTtcbiAgICAgICAgZGVzYyA9IHRvZG8uZ2V0RGVzYygpO1xuXG4gICAgICAgIGRhdGUgPSB0b2RvLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGRkID0gYCR7ZGF0ZS5nZXREYXRlKCl9YC5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBsZXQgbW0gPSBgJHtkYXRlLmdldE1vbnRoKCkgKyAxfWAucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgbGV0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGRhdGUgPSBgJHt5eXl5fS0ke21tfS0ke2RkfWA7XG5cbiAgICAgICAgcHJpb3JpdHkgPSB0b2RvLmdldFByaW9yaXR5KCk7XG4gICAgfVxuXG4gICAgbGV0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKTtcbiAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIixcInRvZG9OYW1lXCIpO1xuICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLFwicmVxdWlyZWRcIik7XG4gICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsbmFtZSk7XG5cbiAgICBsZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIixcInRvZG9EZXNjXCIpO1xuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsZGVzYyk7XG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiY29sc1wiLFwiNTBcIik7XG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLFwiMTBcIik7XG4gICAgdGV4dEFyZWEuaW5uZXJUZXh0ID0gZGVzYztcblxuICAgIGxldCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiZGF0ZVwiKTtcbiAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKFwiaWRcIixcInRvZG9EYXRlXCIpO1xuICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLGRhdGUpO1xuXG4gICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0b2RvUHJpb3JpdHlcIik7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgcHJpb3JpdHlMaXN0KSB7XG4gICAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixvcHRpb24pO1xuICAgICAgICBvcHQuaW5uZXJUZXh0ID0gb3B0aW9uO1xuICAgICAgICBpZihvcHRpb24gPT09IHByaW9yaXR5KSBvcHQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cbiAgICBpbnB1dERpdi5hcHBlbmQoaW5wdXREYXRlLHNlbGVjdCk7XG5cbiAgICBsZXQgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic2F2ZVRvZG9cIik7XG4gICAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG9cIix0b2RvSWQpO1xuICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIscHJvamVjdElEKTtcbiAgICBzYXZlQnRuLmNsYXNzTGlzdC5hZGQoXCJncmVlblwiKTtcbiAgICBzYXZlQnRuLmlubmVyVGV4dCA9IFwiU2F2ZVwiO1xuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY2FuY2VsXCIpXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgY2FuY2VsQnRuLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG4gICAgYnRuRGl2LmFwcGVuZChzYXZlQnRuLGNhbmNlbEJ0bik7XG5cbiAgICBmb3JtLmFwcGVuZChpbnB1dE5hbWUsdGV4dEFyZWEsaW5wdXREaXYsYnRuRGl2KTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuICAgIHdyYXBwZXIuaW5zZXJ0QmVmb3JlKCB0b2RvRGl2ICwgd3JhcHBlci5maXJzdENoaWxkICk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlTG9hZCwgc2hvd1RvZG9zRnVuYywgXG4gICAgICAgIG5ld1Byb2plY3RGdW5jLCBkZWxQcm9qZWN0RnVuYywgXG4gICAgICAgIHRvZG9Gb3JtU2hvdywgbmV3VG9kb0Z1bmMsIGVkaXRUb2RvRnVuYywgZGVsVG9kb0Z1bmMsIGNoYW5nZVN0YXR1c0Z1bmMgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbnBhZ2VMb2FkKCk7XG5hc2lkZUV2ZW50cygpO1xuXG5mdW5jdGlvbiBhc2lkZUV2ZW50cygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMnKS5mb3JFYWNoKFxuICAgICAgICAoaXRlbSk9PntcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIik7XG4gICAgICAgICAgICAgICAgICAgIHNob3dUb2RvcyhpZCxcImFsbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICApXG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICAgICAgICAoKT0+e1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RUaXRsZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QobmFtZSk7XG4gICAgICAgIH1cbiAgICApXG59XG5cbnNob3dUb2RvcyhcImFsbFwiLFwiYWxsXCIpO1xuXG5mdW5jdGlvbiBzaG93VG9kb3MocHJvamVjdElkLGZpbHRlcikge1xuICAgIHNob3dUb2Rvc0Z1bmMocHJvamVjdElkLGZpbHRlcik7XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxQcm9cIikpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxQcm9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgICAgIGRlbFByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdGVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixcbiAgICAgICAgKGUpPT57XG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBzaG93VG9kb3MocHJvamVjdElkLGZpbHRlcik7XG4gICAgICAgIH1cbiAgICApXG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdUb2RvXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VG9kb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICAgICAgdG9kb2Zvcm0oXCJub25lXCIscHJvamVjdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpLmZvckVhY2goXG4gICAgICAgIChpdGVtKT0+e1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBpdGVtLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG9cIik7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVN0YXR1cyhpZCxwcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIClcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0VG9kbycpLmZvckVhY2goXG4gICAgICAgIChpdGVtKT0+e1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBpdGVtLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG9cIik7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9mb3JtKGlkLHByb2plY3RJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgKVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbFRvZG8nKS5mb3JFYWNoKFxuICAgICAgICAoaXRlbSk9PntcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gaXRlbS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2RvXCIpO1xuICAgICAgICAgICAgICAgICAgICBkZWxUb2RvKGlkLHByb2plY3RJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgKVxufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0KG5hbWUpIHtcbiAgICBsZXQgaWQgPSBuZXdQcm9qZWN0RnVuYyhuYW1lKTtcbiAgICBpZiAoaWQgPT09IFwiZXJyb3JcIikgYWxlcnQoXCJDaGFuZ2UgbmFtZSwgdGhpcyBvbmUgaXMgYWxyZWFkeSB1c2VkLlwiKVxuICAgIGVsc2V7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0c1tkYXRhLXByb2plY3Q9XCIke2lkfVwiXWApLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgICAgICBzaG93VG9kb3MoaWQsXCJhbGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHNob3dUb2RvcyggaWQsIFwiYWxsXCIgKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbFByb2plY3QoaWQpIHtcbiAgICBkZWxQcm9qZWN0RnVuYyhpZCk7XG4gICAgYXNpZGVFdmVudHMoKTtcbiAgICBzaG93VG9kb3NGdW5jKCBcImFsbFwiLCBcImFsbFwiICk7XG59XG5cbmZ1bmN0aW9uIHRvZG9mb3JtKGlkLHByb2plY3RJZCkge1xuICAgIHRvZG9Gb3JtU2hvdyhpZCxwcm9qZWN0SWQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZVRvZG9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgIChlKT0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9OYW1lXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EYXRlXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvUHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgICAgICBpZihpZD09PVwibm9uZVwiKXtcbiAgICAgICAgICAgICAgICBuZXdUb2RvKG5hbWUscHJvamVjdElkLGRlc2MsZGF0ZSxwcmlvcml0eSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBlZGl0VG9kbyhuYW1lLGlkLHByb2plY3RJZCxkZXNjLGRhdGUscHJpb3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgIChlKT0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Zvcm1cIilcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIClcbn1cblxuZnVuY3Rpb24gbmV3VG9kbyhuYW1lLHByb2plY3RJZCxkZXNjLGRhdGUscHJpb3JpdHkpe1xuICAgIGlmKCBuZXdUb2RvRnVuYyhuYW1lLHByb2plY3RJZCxkZXNjLGRhdGUscHJpb3JpdHkpID09PSBcImRvbmVcIiApe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Gb3JtXCIpXG4gICAgICAgIClcbiAgICAgICAgc2hvd1RvZG9zKHByb2plY3RJZCxmaWx0ZXI9XCJhbGxcIik7XG4gICAgfWVsc2UgYWxlcnQoXCJQbGVhc2UgY2hhbmdlIG5hbWVcIik7XG59XG5cblxuZnVuY3Rpb24gZWRpdFRvZG8obmFtZSx0b2RvSWQscHJvamVjdElkLGRlc2MsZGF0ZSxwcmlvcml0eSl7XG4gICAgaWYoIGVkaXRUb2RvRnVuYyhuYW1lLHRvZG9JZCxkZXNjLGRhdGUscHJpb3JpdHkpID09PSBcImRvbmVcIiApe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Gb3JtXCIpXG4gICAgICAgIClcbiAgICAgICAgc2hvd1RvZG9zKHByb2plY3RJZCxmaWx0ZXI9XCJhbGxcIik7XG4gICAgfWVsc2UgYWxlcnQoXCJQbGVhc2UgY2hhbmdlIG5hbWVcIilcbn1cblxuZnVuY3Rpb24gY2hhbmdlU3RhdHVzKGlkLHByb2plY3RJZCl7XG4gICAgY2hhbmdlU3RhdHVzRnVuYyhpZCk7XG4gICAgc2hvd1RvZG9zKHByb2plY3RJZCxcImFsbFwiKTtcbn1cblxuZnVuY3Rpb24gZGVsVG9kbyhpZCxwcm9qZWN0SWQpe1xuICAgIGRlbFRvZG9GdW5jKGlkKTtcbiAgICBzaG93VG9kb3MocHJvamVjdElkLFwiYWxsXCIpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==