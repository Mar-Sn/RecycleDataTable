import {IAdapter} from "./IAdapter";
import {ITemplate} from "./ITemplate";

export default class Table {
    private _targetId: string;
    private _dataAdapter: IAdapter;
    private _template: ITemplate;
    private _rowsToView: number;
    private _bodyTrs: HTMLTableRowElement[];
    private _elapsedTime = [];

    constructor(targetId: string, dataAdapter: IAdapter, template: ITemplate, rowsToView: number) {
        this._targetId = targetId;
        this._dataAdapter = dataAdapter;
        this._template = template;
        this._rowsToView = rowsToView;
        this._bodyTrs = [];
    }


    public async render() {
        let t0 = performance.now();

        const tableElement = document.createElement("table");
        const thead = document.createElement("thead");
        const theadTr = document.createElement("tr");

        let t1 = performance.now();
        this._elapsedTime.push(t1 - t0);


        const columns = await this._dataAdapter.getHeaderData();
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

                    this._dataAdapter.getCellData(x, y).then(async data => {
                        const cellTemplate = await this._template.generateCell(x, y, data);
                        const t6 = performance.now();
                        td.innerHTML = cellTemplate;
                        const t7 = performance.now();
                        this._elapsedTime.push(t7 - t6);
                    });
                    tr.appendChild(td);
                }
                const t5 = performance.now();
                this._elapsedTime.push(t5 - t4);
            })
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

        setTimeout(() =>{
            console.log("Render took " + this._elapsedTime.reduce((a, b) => a + b, 0)+ " milliseconds.")
        }, 1000);

    }
}
