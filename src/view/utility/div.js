class Div extends Element
{
    constructor(parent, name = "div", first = false)
    {
        super("div", parent, name, first);

        this.element.style.outline = "dotted 1px";
        this.element.style.width = "100%";
        this.element.style.height = "100%";
    }
}