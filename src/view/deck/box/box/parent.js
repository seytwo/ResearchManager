class BoxParent extends Div
{
    constructor(parent, ticket, name = "parent")
    {
        super(parent, name);
        const _this = this;

        this.element.style.display = "flex";

        this.input = new TextArea(this, 1, this.nameid + ".input");
        
        this.button = new Label("input", this, this.nameid + ".button");
        this.button.appendElement("🌳");
        this.button.child.element.type = "button";
    }
}