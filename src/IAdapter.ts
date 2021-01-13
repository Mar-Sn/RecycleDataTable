export interface IAdapter{
    getHeaderData(): Promise<string[]>;
    getCellData(row: number, column: number): Promise<any>;
    getColumnCount(): Promise<number>;
}
