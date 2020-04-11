class ColumnMain extends Div
{
    constructor(parent, tickets, name = "main")
    {
        super(parent, name);
        const _this = this;

        this.element.style.overflow = "scroll";
        this.element.style.overflowX = "hidden";
        this.resize();

        this.tickets = tickets.slice();
        this.tickets.sort((t1, t2) => (t1.id >= t2.id) ? +1 : -1);
        this.tickets.reverse();
        
        this.boxes = new Map();
        for (const ticket of this.tickets)
        {
            const box = TicketBox.create(this, ticket, this.nameid + ".box");
        }
    }

    resize()
    {
        this.element.style.height 
            = this.parent.element.offsetHeight - this.parent.header.element.offsetHeight;
    }

    addBox(box)
    {
        this.boxes.set(box.ticket.id, box);
        this.appendChild(box.element);
    }
}