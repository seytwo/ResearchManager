class Ticket extends Data
{
    constructor(id, data, controller)
    {
        super(("00000000" + id).slice(-8), data, controller);
        
        this.controller.tickets.set(this.id, this);
    }

    get user()
    {
        return this.controller.users.get(this.data.get("user"));
    }
    get parent()
    {
        const id = this.data.get("parent");
        return this.controller.tickets.get(id);
    }
    
    static create(id, type, data, controller)
    {
        let ticket = null;
        if (type == "task")
        {
            ticket = new Task(id, data, controller);
        }
        else if (type == "memo")
        {
            ticket = new Memo(id, data, controller);
        }
        else
        {
            console.error("[Ticket.create] no type");
            ticket = new Ticket(id, data, controller);
        }
        return ticket;
    }

    static toId(id)
    {
        return ("00000000" + id).slice(-8);
    }
    
    get ancestors()
    {
        const tickets = new Array();
        let ticket = this;
        while (ticket.parent != null)
        {
            ticket = ticket.parent;
            tickets.push(ticket);
        }
        return tickets;
    }
    isAncestor(ticket)
    {
        if (ticket.id == this.id)
        {
            return true;
        }

        const parent = this.parent;
        if (parent == null)
        {
            return false;
        }

        return parent.isAncestor(ticket);
    }
}