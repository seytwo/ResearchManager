class DeckWindow extends Div
{
    constructor(controller, parent, name = "deckwindow")
    {
        super(parent, name);

        const _this = this;
        
        this.controller = controller;
        this.columns = new Array();

        this.itembar = new ItemBar(this);
    }

    addColumn(column)
    {
        this.columns.push(column);
    }
}