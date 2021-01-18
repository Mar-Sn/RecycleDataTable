import {IAdapter} from "../IAdapter";
import {ITemplate} from "../ITemplate";
import {ICell} from "../ICell";
import {IRowTemplate} from "../IRowTemplate";
import Table from "../Table";

export class JsonExampleAdapter implements IAdapter{
    private _headerFetch: Promise<any>;
    private _headerData: any;
    private _bodyData: any;
    private _dataFetch: Promise<any>;

    getCellData(row: number, column: number): Promise<any> {
        if(this._bodyData == null){
            if(this._dataFetch == null){
                this._dataFetch = fetch("assets/body.json").then(e => e.json()).then(json =>{
                    this._bodyData = json;
                    return json;
                });
            }
            return this._dataFetch.then(data =>{
                const inner = data[row];
                return inner[this._headerData[column]];
            });
        }
        let r = this._bodyData[row];
        return Promise.resolve(r[this._headerData[column]]);
    }

    getColumnCount(): Promise<number> {
        return this.headerFetchAction().then(headers =>{
            return headers.length;
        })
    }

    getHeaderData(): Promise<string[]> {
        if(this._headerData == null){
            return this.headerFetchAction();
        }
        return Promise.resolve(this._headerData);
    }

    private headerFetchAction(): Promise<any>{
        if(this._headerFetch == null){
            this._headerFetch = fetch("assets/headers.json").then(e => e.json()).then(json =>{
                this._headerData = json;
                return json;
            });
        }
        return this._headerFetch;
    }
}

export class JsonExampleTemplate implements ITemplate{
    generateCell(row: number, column: number, item: any): Promise<string | null> {
        return Promise.resolve(item);
    }

    generateDefaultCell(): Promise<ICell> {
        return Promise.resolve(undefined);
    }

    generateDefaultRow(): Promise<IRowTemplate> {
        return Promise.resolve(undefined);
    }
}

new Table("table", new JsonExampleAdapter(), new JsonExampleTemplate(), 20).render();
