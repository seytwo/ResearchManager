class Details extends Element
{
    constructor(parent, name = "details")
    {
        super("details", parent, name);

        this.summary = new Element("summary", this, this.nameid + ".summary");
    }
}