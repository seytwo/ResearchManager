class Data
{
    constructor(id, data, controller)
    {
        this.id = id;
        this.data = new Map();
        for (const key in data)
        {
            this.data.set(key, data[key]);
        }
        this.controller = controller;
        
        console.log(this);
    }
}