class Label extends Element
{
    constructor(type, parent, name = "label")
    {
        super("label", parent, name);
        
        this.element.style.outline = "dotted 1px";

        this.child = new Element(type, this, this.nameid + ".child");
        this.child.element.style.display = "none";
    }
}