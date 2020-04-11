class TextArea extends Element
{
    constructor(parent, rows, name = "textarea")
    {
        super("textarea", parent, name);

        this.element.rows = rows;
        this.element.style.width = "100%";
        this.element.style.resize = "none";
    }
}