/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Table.ts":
/*!**********************!*\
  !*** ./src/Table.ts ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    class Table {
        constructor(targetId, dataAdapter, template, rowsToView) {
            this._elapsedTime = [];
            this._targetId = targetId;
            this._dataAdapter = dataAdapter;
            this._template = template;
            this._rowsToView = rowsToView;
            this._bodyTrs = [];
        }
        render() {
            return __awaiter(this, void 0, void 0, function* () {
                let t0 = performance.now();
                const tableElement = document.createElement("table");
                const thead = document.createElement("thead");
                const theadTr = document.createElement("tr");
                let t1 = performance.now();
                this._elapsedTime.push(t1 - t0);
                const columns = yield this._dataAdapter.getHeaderData();
                t0 = performance.now();
                for (let column of columns) {
                    const th = document.createElement("th");
                    th.append(column);
                    theadTr.appendChild(th);
                }
                thead.appendChild(theadTr);
                tableElement.appendChild(thead);
                const tbody = document.createElement("tbody");
                t1 = performance.now();
                this._elapsedTime.push(t1 - t0);
                for (let x = 0; x < this._rowsToView * 2; x++) {
                    const t2 = performance.now();
                    const tr = document.createElement("tr");
                    this._dataAdapter.getColumnCount().then(columnCount => {
                        const t4 = performance.now();
                        for (let y = 0; y < columnCount; y++) {
                            const td = document.createElement("td");
                            this._dataAdapter.getCellData(x, y).then((data) => __awaiter(this, void 0, void 0, function* () {
                                const cellTemplate = yield this._template.generateCell(x, y, data);
                                const t6 = performance.now();
                                td.innerHTML = cellTemplate;
                                const t7 = performance.now();
                                this._elapsedTime.push(t7 - t6);
                            }));
                            tr.appendChild(td);
                        }
                        const t5 = performance.now();
                        this._elapsedTime.push(t5 - t4);
                    });
                    this._bodyTrs.push(tr);
                    tbody.appendChild(tr);
                    const t3 = performance.now();
                    this._elapsedTime.push(t3 - t2);
                }
                t0 = performance.now();
                tableElement.appendChild(tbody);
                document.getElementById(this._targetId).appendChild(tableElement);
                t1 = performance.now();
                this._elapsedTime.push(t1 - t0);
                setTimeout(() => {
                    console.log("Render took " + this._elapsedTime.reduce((a, b) => a + b, 0) + " milliseconds.");
                }, 1000);
            });
        }
    }
    exports.default = Table;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/example/JsonTableExample.ts":
/*!*****************************************!*\
  !*** ./src/example/JsonTableExample.ts ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../Table */ "./src/Table.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Table_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.JsonExampleTemplate = exports.JsonExampleAdapter = void 0;
    class JsonExampleAdapter {
        getCellData(row, column) {
            if (this._bodyData == null) {
                if (this._dataFetch == null) {
                    this._dataFetch = fetch("assets/body.json").then(e => e.json()).then(json => {
                        this._bodyData = json;
                        return json;
                    });
                }
                return this._dataFetch.then(data => {
                    const inner = data[row];
                    return inner[this._headerData[column]];
                });
            }
            let r = this._bodyData[row];
            return Promise.resolve(r[this._headerData[column]]);
        }
        getColumnCount() {
            return this.headerFetchAction().then(headers => {
                return headers.length;
            });
        }
        getHeaderData() {
            if (this._headerData == null) {
                return this.headerFetchAction();
            }
            return Promise.resolve(this._headerData);
        }
        headerFetchAction() {
            if (this._headerFetch == null) {
                this._headerFetch = fetch("assets/headers.json").then(e => e.json()).then(json => {
                    this._headerData = json;
                    return json;
                });
            }
            return this._headerFetch;
        }
    }
    exports.JsonExampleAdapter = JsonExampleAdapter;
    class JsonExampleTemplate {
        generateCell(row, column, item) {
            return Promise.resolve(item);
        }
        generateDefaultCell() {
            return Promise.resolve(undefined);
        }
        generateDefaultRow() {
            return Promise.resolve(undefined);
        }
    }
    exports.JsonExampleTemplate = JsonExampleTemplate;
    new Table_1.default("table", new JsonExampleAdapter(), new JsonExampleTemplate(), 20).render();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/example/JsonTableExample.ts");
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWN5Y2xlRGF0YVRhYmxlLy4vc3JjL1RhYmxlLnRzIiwid2VicGFjazovL1JlY3ljbGVEYXRhVGFibGUvLi9zcmMvZXhhbXBsZS9Kc29uVGFibGVFeGFtcGxlLnRzIiwid2VicGFjazovL1JlY3ljbGVEYXRhVGFibGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVjeWNsZURhdGFUYWJsZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR0EsTUFBcUIsS0FBSztRQVF0QixZQUFZLFFBQWdCLEVBQUUsV0FBcUIsRUFBRSxRQUFtQixFQUFFLFVBQWtCO1lBRnBGLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1lBR3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFHWSxNQUFNOztnQkFDZixJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRTNCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTdDLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUdoQyxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hELEVBQUUsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUssSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO29CQUN4QixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUMzQjtnQkFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVoQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRWhDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDM0MsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUU3QixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDbEQsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUNsQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUV4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU0sSUFBSSxFQUFDLEVBQUU7Z0NBQ2xELE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQ0FDbkUsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dDQUM3QixFQUFFLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztnQ0FDNUIsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dDQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7NEJBQ3BDLENBQUMsRUFBQyxDQUFDOzRCQUNILEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7eUJBQ3RCO3dCQUNELE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUNwQyxDQUFDLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3RCLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQztnQkFDRCxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVoQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2xFLEVBQUUsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFFaEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUUsZ0JBQWdCLENBQUM7Z0JBQ2hHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUViLENBQUM7U0FBQTtLQUNKO0lBakZELHdCQWlGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM5RUQsTUFBYSxrQkFBa0I7UUFNM0IsV0FBVyxDQUFDLEdBQVcsRUFBRSxNQUFjO1lBQ25DLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUM7Z0JBQ3RCLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUM7b0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzt3QkFDdEIsT0FBTyxJQUFJLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2lCQUNOO2dCQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQy9CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQzthQUNOO1lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFFRCxjQUFjO1lBQ1YsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMxQixDQUFDLENBQUM7UUFDTixDQUFDO1FBRUQsYUFBYTtZQUNULElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUM7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDbkM7WUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFTyxpQkFBaUI7WUFDckIsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksRUFBQztnQkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzdFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixPQUFPLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO0tBQ0o7SUE3Q0QsZ0RBNkNDO0lBRUQsTUFBYSxtQkFBbUI7UUFDNUIsWUFBWSxDQUFDLEdBQVcsRUFBRSxNQUFjLEVBQUUsSUFBUztZQUMvQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELG1CQUFtQjtZQUNmLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsa0JBQWtCO1lBQ2QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FDSjtJQVpELGtEQVlDO0lBRUQsSUFBSSxlQUFLLENBQUMsT0FBTyxFQUFFLElBQUksa0JBQWtCLEVBQUUsRUFBRSxJQUFJLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7OztVQ25FckY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJqc29uVGFibGVFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQWRhcHRlcn0gZnJvbSBcIi4vSUFkYXB0ZXJcIjtcclxuaW1wb3J0IHtJVGVtcGxhdGV9IGZyb20gXCIuL0lUZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUge1xyXG4gICAgcHJpdmF0ZSBfdGFyZ2V0SWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2RhdGFBZGFwdGVyOiBJQWRhcHRlcjtcclxuICAgIHByaXZhdGUgX3RlbXBsYXRlOiBJVGVtcGxhdGU7XHJcbiAgICBwcml2YXRlIF9yb3dzVG9WaWV3OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9ib2R5VHJzOiBIVE1MVGFibGVSb3dFbGVtZW50W107XHJcbiAgICBwcml2YXRlIF9lbGFwc2VkVGltZSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldElkOiBzdHJpbmcsIGRhdGFBZGFwdGVyOiBJQWRhcHRlciwgdGVtcGxhdGU6IElUZW1wbGF0ZSwgcm93c1RvVmlldzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0SWQgPSB0YXJnZXRJZDtcclxuICAgICAgICB0aGlzLl9kYXRhQWRhcHRlciA9IGRhdGFBZGFwdGVyO1xyXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy5fcm93c1RvVmlldyA9IHJvd3NUb1ZpZXc7XHJcbiAgICAgICAgdGhpcy5fYm9keVRycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICBjb25zdCB0YWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICAgICAgY29uc3QgdGhlYWRUciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHJcbiAgICAgICAgbGV0IHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5fZWxhcHNlZFRpbWUucHVzaCh0MSAtIHQwKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBhd2FpdCB0aGlzLl9kYXRhQWRhcHRlci5nZXRIZWFkZXJEYXRhKCk7XHJcbiAgICAgICAgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBmb3IgKGxldCBjb2x1bW4gb2YgY29sdW1ucykge1xyXG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgdGguYXBwZW5kKGNvbHVtbik7XHJcbiAgICAgICAgICAgIHRoZWFkVHIuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhlYWQuYXBwZW5kQ2hpbGQodGhlYWRUcik7XHJcbiAgICAgICAgdGFibGVFbGVtZW50LmFwcGVuZENoaWxkKHRoZWFkKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLl9lbGFwc2VkVGltZS5wdXNoKHQxIC0gdDApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX3Jvd3NUb1ZpZXcgKiAyOyB4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgdDIgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhQWRhcHRlci5nZXRDb2x1bW5Db3VudCgpLnRoZW4oY29sdW1uQ291bnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdDQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY29sdW1uQ291bnQ7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhQWRhcHRlci5nZXRDZWxsRGF0YSh4LCB5KS50aGVuKGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsVGVtcGxhdGUgPSBhd2FpdCB0aGlzLl90ZW1wbGF0ZS5nZW5lcmF0ZUNlbGwoeCwgeSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHQ2ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkLmlubmVySFRNTCA9IGNlbGxUZW1wbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdDcgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxhcHNlZFRpbWUucHVzaCh0NyAtIHQ2KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0NSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxhcHNlZFRpbWUucHVzaCh0NSAtIHQ0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5fYm9keVRycy5wdXNoKHRyKTtcclxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgICAgICBjb25zdCB0MyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGFwc2VkVGltZS5wdXNoKHQzIC0gdDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRhYmxlRWxlbWVudC5hcHBlbmRDaGlsZCh0Ym9keSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX3RhcmdldElkKS5hcHBlbmRDaGlsZCh0YWJsZUVsZW1lbnQpO1xyXG4gICAgICAgIHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5fZWxhcHNlZFRpbWUucHVzaCh0MSAtIHQwKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW5kZXIgdG9vayBcIiArIHRoaXMuX2VsYXBzZWRUaW1lLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApKyBcIiBtaWxsaXNlY29uZHMuXCIpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SUFkYXB0ZXJ9IGZyb20gXCIuLi9JQWRhcHRlclwiO1xyXG5pbXBvcnQge0lUZW1wbGF0ZX0gZnJvbSBcIi4uL0lUZW1wbGF0ZVwiO1xyXG5pbXBvcnQge0lDZWxsfSBmcm9tIFwiLi4vSUNlbGxcIjtcclxuaW1wb3J0IHtJUm93VGVtcGxhdGV9IGZyb20gXCIuLi9JUm93VGVtcGxhdGVcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9UYWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEpzb25FeGFtcGxlQWRhcHRlciBpbXBsZW1lbnRzIElBZGFwdGVye1xyXG4gICAgcHJpdmF0ZSBfaGVhZGVyRmV0Y2g6IFByb21pc2U8YW55PjtcclxuICAgIHByaXZhdGUgX2hlYWRlckRhdGE6IGFueTtcclxuICAgIHByaXZhdGUgX2JvZHlEYXRhOiBhbnk7XHJcbiAgICBwcml2YXRlIF9kYXRhRmV0Y2g6IFByb21pc2U8YW55PjtcclxuXHJcbiAgICBnZXRDZWxsRGF0YShyb3c6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGlmKHRoaXMuX2JvZHlEYXRhID09IG51bGwpe1xyXG4gICAgICAgICAgICBpZih0aGlzLl9kYXRhRmV0Y2ggPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhRmV0Y2ggPSBmZXRjaChcImFzc2V0cy9ib2R5Lmpzb25cIikudGhlbihlID0+IGUuanNvbigpKS50aGVuKGpzb24gPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYm9keURhdGEgPSBqc29uO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFGZXRjaC50aGVuKGRhdGEgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lciA9IGRhdGFbcm93XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbm5lclt0aGlzLl9oZWFkZXJEYXRhW2NvbHVtbl1dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHIgPSB0aGlzLl9ib2R5RGF0YVtyb3ddO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoclt0aGlzLl9oZWFkZXJEYXRhW2NvbHVtbl1dKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2x1bW5Db3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlckZldGNoQWN0aW9uKCkudGhlbihoZWFkZXJzID0+e1xyXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVycy5sZW5ndGg7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRIZWFkZXJEYXRhKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgICAgICBpZih0aGlzLl9oZWFkZXJEYXRhID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJGZXRjaEFjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2hlYWRlckRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGVhZGVyRmV0Y2hBY3Rpb24oKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgICAgIGlmKHRoaXMuX2hlYWRlckZldGNoID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFkZXJGZXRjaCA9IGZldGNoKFwiYXNzZXRzL2hlYWRlcnMuanNvblwiKS50aGVuKGUgPT4gZS5qc29uKCkpLnRoZW4oanNvbiA9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hlYWRlckRhdGEgPSBqc29uO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhZGVyRmV0Y2g7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uRXhhbXBsZVRlbXBsYXRlIGltcGxlbWVudHMgSVRlbXBsYXRle1xyXG4gICAgZ2VuZXJhdGVDZWxsKHJvdzogbnVtYmVyLCBjb2x1bW46IG51bWJlciwgaXRlbTogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZURlZmF1bHRDZWxsKCk6IFByb21pc2U8SUNlbGw+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVEZWZhdWx0Um93KCk6IFByb21pc2U8SVJvd1RlbXBsYXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgVGFibGUoXCJ0YWJsZVwiLCBuZXcgSnNvbkV4YW1wbGVBZGFwdGVyKCksIG5ldyBKc29uRXhhbXBsZVRlbXBsYXRlKCksIDIwKS5yZW5kZXIoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2V4YW1wbGUvSnNvblRhYmxlRXhhbXBsZS50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==