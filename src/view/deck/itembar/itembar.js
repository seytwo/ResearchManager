class ItemBar extends Div
{
    constructor(parent, name = "itembar")
    {
        super(parent, name);
        const _this = this;

        this.element.style.width = "auto";
        this.element.style.display = "inline-block";
        this.element.style.verticalAlign = "top";
        
        this.homeButton = new Button("🏠<br>", this, this.nameid + ".home");
        this.homeButton.child.element
            .addEventListener("click", (event) =>
        {
            console.log(_this.homeButton.child.nameid + ".click");
            const user = _this.parent.controller.users.get("default"); // ベタ
            const tickets = Array.from(_this.parent.controller.tickets.values());
            const column = new MainColumn(_this.parent, user, tickets, _this.parent.nameid + ".homeColumn");
        });
        
        this.taskButton = new Button("💼<br>", this, this.nameid + ".task");
        this.taskButton.child.element
            .addEventListener("click", (event) =>
        {
            console.log(_this.taskButton.child.nameid + ".click");
            const user = _this.parent.controller.users.get("default"); // ベタ
            const tickets = Array.from(_this.parent.controller.tickets.values());
            const column = new TaskColumn(_this.parent, user, tickets, _this.parent.nameid + ".taskColumn");
        });
    }
}