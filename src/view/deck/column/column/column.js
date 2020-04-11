class Column extends Div
{
    constructor(parent, user, tickets, name = "column")
    {
        super(parent, name);
        parent.addColumn(parent);
        
        this.element.style.width = "auto";
        this.element.style.display = "inline-block";
        this.element.style.verticalAlign = "top";

        this.header = new ColumnHeader(this, user, this.nameid + ".header");

        this.main = new ColumnMain(this, tickets, this.nameid + ".main");
    }

    getDefaultParent()
    {
        return "";
    }
}