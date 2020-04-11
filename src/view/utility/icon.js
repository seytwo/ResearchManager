class Icon extends Element
{
    constructor(parent, src, name = "icon")
    {
        super("img", parent, name);

        this.element.src = src;
    }
}