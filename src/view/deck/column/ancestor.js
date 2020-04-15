class AncestorColumn extends Column
{
    constructor(parent, ticket, name = "ancestorColumn")
    {
        const tickets = ticket.ancestors;
        tickets.push(ticket);
        super(parent, ticket.user, tickets, name);
        const _this = this;

        this.ticket = ticket;

        this.header.title.element.innerHTML = "ancestor tree";
        
        // 追加ボックス
        this.header.addBox = new AddBox(this.header, this.ticket.user, this.nameid + ".addBox");
        this.header.addBox.main.right.parentBox.input.element.readOnly = true;
        this.header.addBox.main.right.parentBox.input.element.value = this.ticket.id;
        this.header.addBox.details.element.addEventListener("toggle", (event) =>
        {
            console.log("[" + _this.header.addBox.nameid + ".toggle]");
            _this.main.resize();
        });
    }
    

    getDefaultParent()
    {
        return this.ticket.id;
    }
}