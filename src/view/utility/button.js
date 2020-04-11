class Button extends Label
{
    constructor(value, parent, name = "button")
    {
        super("input", parent, name);

        this.child.element.type = "button";
        this.appendElement(value);
    }
}