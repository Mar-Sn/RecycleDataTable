var adapter = {
    headerData: null,
    bodyData: null,
    dataFetch: null,
    headerFetch: null,

    getHeaderData: function(){
        if(this.headerData == null){
            return this.headerFetchAction();
        }
        return Promise.resolve(this.headerData);
    },
    getCellData: function(row, column){
        if(this.bodyData == null){
            if(this.dataFetch == null){
                this.dataFetch = fetch("assets/body.json").then(e => e.json()).then(json =>{
                    this.bodyData = json;
                    return json;
                });
            }
            return this.dataFetch.then(data =>{
                const inner = data[row];
                return inner[this.headerData[column]];
            });
        }
        let r = this.bodyData[row];
        return Promise.resolve(r[this.headerData[column]]);
    },
    getColumnCount: function(){
        return this.headerFetchAction().then(headers =>{
            return headers.length;
        })
    },
    headerFetchAction: function(){
        if(this.headerFetch == null){
            this.headerFetch = fetch("assets/headers.json").then(e => e.json()).then(json =>{
                this.headerData = json;
                return json;
            });
        }
        return this.headerFetch;
    }
}

var template = {
    generateCell: function(row, column, item){
        return Promise.resolve(item);
    }
}

var t = new Table("table", adapter, template, 20);
t.render();
