import {IRowTemplate} from "./IRowTemplate";
import {ICell} from "./ICell";

export interface ITemplate{
    generateDefaultRow(): Promise<IRowTemplate>
    generateDefaultCell(): Promise<ICell>
    generateCell(row: number, column: number, item: any): Promise<string|null>
}
