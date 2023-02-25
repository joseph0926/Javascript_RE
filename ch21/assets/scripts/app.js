/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n  constructor(hostElementId, insertBefore = false) {\r\n    if (hostElementId) {\r\n      this.hostElement = document.getElementById(hostElementId);\r\n    } else {\r\n      this.hostElement = document.body;\r\n    }\r\n    this.insertBefore = insertBefore;\r\n  }\r\n\r\n  detach() {\r\n    if (this.element) {\r\n      this.element.remove();\r\n      // this.element.parentElement.removeChild(this.element);\r\n    }\r\n  }\r\n\r\n  attach() {\r\n    this.hostElement.insertAdjacentElement(this.insertBefore ? \"afterbegin\" : \"beforeend\", this.element);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ch21/./src/App/Component.js?");

/***/ }),

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectItem\": () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip */ \"./src/App/Tooltip.js\");\n\r\n\r\n\r\nclass ProjectItem {\r\n  hasActiveTooltip = false;\r\n\r\n  constructor(id, updateProjectListsFunction, type) {\r\n    this.id = id;\r\n    this.updateProjectListsHandler = updateProjectListsFunction;\r\n    this.connectMoreInfoButton();\r\n    this.connectSwitchButton(type);\r\n    this.connectDrag();\r\n  }\r\n\r\n  showMoreInfoHandler() {\r\n    if (this.hasActiveTooltip) {\r\n      return;\r\n    }\r\n    const projectElement = document.getElementById(this.id);\r\n    const tooltipText = projectElement.dataset.extraInfo;\r\n    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then((module) => {\r\n      const tooltip = new module.Tooltip(\r\n        () => {\r\n          this.hasActiveTooltip = false;\r\n        },\r\n        tooltipText,\r\n        this.id\r\n      );\r\n      tooltip.attach();\r\n      this.hasActiveTooltip = true;\r\n    });\r\n  }\r\n\r\n  connectDrag() {\r\n    const item = document.getElementById(this.id);\r\n    item.addEventListener(\"dragstart\", (event) => {\r\n      event.dataTransfer.setData(\"text/plain\", this.id);\r\n      event.dataTransfer.effectAllowed = \"move\";\r\n    });\r\n\r\n    item.addEventListener(\"dragend\", (event) => {\r\n      console.log(event);\r\n    });\r\n  }\r\n\r\n  connectMoreInfoButton() {\r\n    const projectItemElement = document.getElementById(this.id);\r\n    const moreInfoBtn = projectItemElement.querySelector(\"button:first-of-type\");\r\n    moreInfoBtn.addEventListener(\"click\", this.showMoreInfoHandler.bind(this));\r\n  }\r\n\r\n  connectSwitchButton(type) {\r\n    const projectItemElement = document.getElementById(this.id);\r\n    let switchBtn = projectItemElement.querySelector(\"button:last-of-type\");\r\n    switchBtn = _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__.DOMHelper.clearEventListeners(switchBtn);\r\n    switchBtn.textContent = type === \"active\" ? \"Finish\" : \"Activate\";\r\n    switchBtn.addEventListener(\"click\", this.updateProjectListsHandler.bind(null, this.id));\r\n  }\r\n\r\n  update(updateProjectListsFn, type) {\r\n    this.updateProjectListsHandler = updateProjectListsFn;\r\n    this.connectSwitchButton(type);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ch21/./src/App/ProjectItem.js?");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n\r\n\r\n\r\nclass ProjectList {\r\n  projects = [];\r\n\r\n  constructor(type) {\r\n    this.type = type;\r\n    const prjItems = document.querySelectorAll(`#${type}-projects li`);\r\n    for (const prjItem of prjItems) {\r\n      this.projects.push(new _ProjectItem__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));\r\n    }\r\n    console.log(this.projects);\r\n    this.connectDroppable();\r\n  }\r\n\r\n  connectDroppable() {\r\n    const list = document.querySelector(`#${this.type}-projects ul`);\r\n\r\n    list.addEventListener(\"dragenter\", (event) => {\r\n      if (event.dataTransfer.types[0] === \"text/plain\") {\r\n        list.parentElement.classList.add(\"droppable\");\r\n        event.preventDefault();\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"dragover\", (event) => {\r\n      if (event.dataTransfer.types[0] === \"text/plain\") {\r\n        event.preventDefault();\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"dragleave\", (event) => {\r\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\r\n        list.parentElement.classList.remove(\"droppable\");\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"drop\", (event) => {\r\n      const prjId = event.dataTransfer.getData(\"text/plain\");\r\n      if (this.projects.find((p) => p.id === prjId)) {\r\n        return;\r\n      }\r\n      document.getElementById(prjId).querySelector(\"button:last-of-type\").click();\r\n      list.parentElement.classList.remove(\"droppable\");\r\n      // event.preventDefault(); // not required\r\n    });\r\n  }\r\n\r\n  setSwitchHandlerFunction(switchHandlerFunction) {\r\n    this.switchHandler = switchHandlerFunction;\r\n  }\r\n\r\n  addProject(project) {\r\n    this.projects.push(project);\r\n    _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__.DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);\r\n    project.update(this.switchProject.bind(this), this.type);\r\n  }\r\n\r\n  switchProject(projectId) {\r\n    // const projectIndex = this.projects.findIndex(p => p.id === projectId);\r\n    // this.projects.splice(projectIndex, 1);\r\n    this.switchHandler(this.projects.find((p) => p.id === projectId));\r\n    this.projects = this.projects.filter((p) => p.id !== projectId);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ch21/./src/App/ProjectList.js?");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tooltip\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/App/Component.js\");\n\r\n\r\nclass Tooltip extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {\r\n  constructor(closeNotifierFunction, text, hostElementId) {\r\n    super(hostElementId);\r\n    this.closeNotifier = closeNotifierFunction;\r\n    this.text = text;\r\n    this.create();\r\n  }\r\n\r\n  closeTooltip = () => {\r\n    this.detach();\r\n    this.closeNotifier();\r\n  };\r\n\r\n  create() {\r\n    const tooltipElement = document.createElement(\"div\");\r\n    tooltipElement.className = \"card\";\r\n    const tooltipTemplate = document.getElementById(\"tooltip\");\r\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\r\n    tooltipBody.querySelector(\"p\").textContent = this.text;\r\n    tooltipElement.append(tooltipBody);\r\n\r\n    const hostElPosLeft = this.hostElement.offsetLeft;\r\n    const hostElPosTop = this.hostElement.offsetTop;\r\n    const hostElHeight = this.hostElement.clientHeight;\r\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\r\n\r\n    const x = hostElPosLeft + 20;\r\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\r\n\r\n    tooltipElement.style.position = \"absolute\";\r\n    tooltipElement.style.left = x + \"px\"; // 500px\r\n    tooltipElement.style.top = y + \"px\";\r\n\r\n    tooltipElement.addEventListener(\"click\", this.closeTooltip);\r\n    this.element = tooltipElement;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ch21/./src/App/Tooltip.js?");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMHelper\": () => (/* binding */ DOMHelper)\n/* harmony export */ });\nclass DOMHelper {\r\n  static clearEventListeners(element) {\r\n    const clonedElement = element.cloneNode(true);\r\n    element.replaceWith(clonedElement);\r\n    return clonedElement;\r\n  }\r\n\r\n  static moveElement(elementId, newDestinationSelector) {\r\n    const element = document.getElementById(elementId);\r\n    const destinationElement = document.querySelector(newDestinationSelector);\r\n    destinationElement.append(element);\r\n    element.scrollIntoView({ behavior: \"smooth\" });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ch21/./src/Utility/DOMHelper.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList */ \"./src/App/ProjectList.js\");\n\n\nclass App {\n  static init() {\n    const activeProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"active\");\n    const finishedProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"finished\");\n    activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));\n    finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));\n\n    // const timerId = setTimeout(this.startAnalytics, 3000);\n\n    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {\n    //   clearTimeout(timerId);\n    // });\n  }\n\n  static startAnalytics() {\n    const analyticsScript = document.createElement(\"script\");\n    analyticsScript.src = \"assets/scripts/Utility/Analytics.js\";\n    analyticsScript.defer = true;\n    document.head.append(analyticsScript);\n  }\n}\n\nApp.init();\n\n\n//# sourceURL=webpack://ch21/./src/app.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;