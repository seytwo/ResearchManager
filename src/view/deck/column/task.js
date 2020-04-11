class TaskColumn extends Column
{
    constructor(parent, user, tickets, name = "taskColumn")
    {
        const tasks = tickets.filter((ticket) => 
            (ticket.data.get("type") == "task") && (ticket.data.get("status") != "end")
        );
        
        super(parent, user, tasks, name);
        
        this.header.title.element.innerHTML = "task";
    }
}