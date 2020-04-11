class MainColumn extends Column
{
    constructor(parent, user, tickets, name = "column")
    {
        super(parent, user, tickets, name);
        const _this = this;
        
        this.header.title.element.innerHTML = "home";

        this.header.addBox = new AddBox(this.header, user, this.nameid + ".addBox");
        this.header.addBox.details.element.addEventListener("toggle", (event) =>
        {
            console.log("[" + _this.header.nameid + ".toggle]");
            _this.main.resize();
        });
    }
}