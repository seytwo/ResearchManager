class ColumnHeader extends Div
{
    constructor(parent, user, name = "header")
    {
        super(parent, name);
        const _this = this;

        this.element.style.height = "auto";
        this.element.style.backgroundColor = "#EDF7FF";

        this.clearButton = new Element("input", this, this.nameid + ".clear");
        this.clearButton.element.type = "button";
        this.clearButton.element.value = "x";
        this.clearButton.element.addEventListener("click", (event) =>
        {
            console.log("[" + _this.clearButton.nameid + ".click]");
            const column = _this.parent;
            const window = column.parent;
            window.columns = window.columns.filter((_column) => _column != _this);
            window.element.removeChild(column.element);
        });

        this.title = new Element("font", this, this.nameid + ".title");
        this.title.appendElement("column");
    }
}