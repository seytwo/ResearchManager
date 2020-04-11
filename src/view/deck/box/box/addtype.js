class AddTypeButton extends Button
{
    constructor(type, icon, parent, name = "addTypeButton")
    {
        super(icon, parent, name);
        const _this = this;

        this.type = type;
        
        this.child.element.addEventListener("click", (event) =>
        {
            console.log("[" + this.nameid + ".click]");
            const addBox = _this.parent.parent.parent.parent.parent.parent.header.addBox;
            addBox.main.left.typeSelector.options.get(type).element.selected = true;
        });
    }
}