var Table;Table =
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/Table.ts");
/******/ })()
.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYWJsZS8uL3NyYy9UYWJsZS50cyIsIndlYnBhY2s6Ly9UYWJsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UYWJsZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdBLE1BQXFCLEtBQUs7UUFRdEIsWUFBWSxRQUFnQixFQUFFLFdBQXFCLEVBQUUsUUFBbUIsRUFBRSxVQUFrQjtZQUZwRixpQkFBWSxHQUFHLEVBQUUsQ0FBQztZQUd0QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBR1ksTUFBTTs7Z0JBQ2YsSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUUzQixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUU3QyxJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFHaEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN4RCxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dC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QyxDQUFDO2dCQUNsRSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRWhDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFFLGdCQUFnQixDQUFDO2dCQUNoRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFYixDQUFDO1NBQUE7S0FDSjtJQWpGRCx3QkFpRkM7Ozs7Ozs7OztVQ3BGRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQWRhcHRlcn0gZnJvbSBcIi4vSUFkYXB0ZXJcIjtcclxuaW1wb3J0IHtJVGVtcGxhdGV9IGZyb20gXCIuL0lUZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUge1xyXG4gICAgcHJpdmF0ZSBfdGFyZ2V0SWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2RhdGFBZGFwdGVyOiBJQWRhcHRlcjtcclxuICAgIHByaXZhdGUgX3RlbXBsYXRlOiBJVGVtcGxhdGU7XHJcbiAgICBwcml2YXRlIF9yb3dzVG9WaWV3OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9ib2R5VHJzOiBIVE1MVGFibGVSb3dFbGVtZW50W107XHJcbiAgICBwcml2YXRlIF9lbGFwc2VkVGltZSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldElkOiBzdHJpbmcsIGRhdGFBZGFwdGVyOiBJQWRhcHRlciwgdGVtcGxhdGU6IElUZW1wbGF0ZSwgcm93c1RvVmlldzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0SWQgPSB0YXJnZXRJZDtcclxuICAgICAgICB0aGlzLl9kYXRhQWRhcHRlciA9IGRhdGFBZGFwdGVyO1xyXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy5fcm93c1RvVmlldyA9IHJvd3NUb1ZpZXc7XHJcbiAgICAgICAgdGhpcy5fYm9keVRycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICBjb25zdCB0YWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICAgICAgY29uc3QgdGhlYWRUciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHJcbiAgICAgICAgbGV0IHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5fZWxhcHNlZFRpbWUucHVzaCh0MSAtIHQwKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBhd2FpdCB0aGlzLl9kYXRhQWRhcHRlci5nZXRIZWFkZXJEYXRhKCk7XHJcbiAgICAgICAgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBmb3IgKGxldCBjb2x1bW4gb2YgY29sdW1ucykge1xyXG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgdGguYXBwZW5kKGNvbHVtbik7XHJcbiAgICAgICAgICAgIHRoZWFkVHIuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhlYWQuYXBwZW5kQ2hpbGQodGhlYWRUcik7XHJcbiAgICAgICAgdGFibGVFbGVtZW50LmFwcGVuZENoaWxkKHRoZWFkKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLl9lbGFwc2VkVGltZS5wdXNoKHQxIC0gdDApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX3Jvd3NUb1ZpZXcgKiAyOyB4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgdDIgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhQWRhcHRlci5nZXRDb2x1bW5Db3VudCgpLnRoZW4oY29sdW1uQ291bnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdDQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY29sdW1uQ291bnQ7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhQWRhcHRlci5nZXRDZWxsRGF0YSh4LCB5KS50aGVuKGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsVGVtcGxhdGUgPSBhd2FpdCB0aGlzLl90ZW1wbGF0ZS5nZW5lcmF0ZUNlbGwoeCwgeSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHQ2ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkLmlubmVySFRNTCA9IGNlbGxUZW1wbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdDcgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxhcHNlZFRpbWUucHVzaCh0NyAtIHQ2KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0NSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxhcHNlZFRpbWUucHVzaCh0NSAtIHQ0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5fYm9keVRycy5wdXNoKHRyKTtcclxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgICAgICBjb25zdCB0MyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGFwc2VkVGltZS5wdXNoKHQzIC0gdDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRhYmxlRWxlbWVudC5hcHBlbmRDaGlsZCh0Ym9keSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX3RhcmdldElkKS5hcHBlbmRDaGlsZCh0YWJsZUVsZW1lbnQpO1xyXG4gICAgICAgIHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5fZWxhcHNlZFRpbWUucHVzaCh0MSAtIHQwKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW5kZXIgdG9vayBcIiArIHRoaXMuX2VsYXBzZWRUaW1lLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApKyBcIiBtaWxsaXNlY29uZHMuXCIpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9UYWJsZS50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=