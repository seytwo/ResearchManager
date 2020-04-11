class TaskBox extends TicketBox
{
    constructor(parent, task, name = "taskbox", first = false)
    {
        super(parent, task, name, first);
        const _this = this;

        // タスクの状態
        const status = this.ticket.data.get("status");
        this.main.left.statusSelector.options.get(status).element.selected = true;
        this.main.left.statusSelector.element.addEventListener("change", (event) =>
        {
            _this.save(event);
        });
        
        // 
        this.main.left.showProgressButton.child.element.addEventListener("click", (event) =>
        {
            console.log("[" + this.nameid + ".click]");

            const window = _this.parent.parent.parent;
            const column = new ProgressColumn(window, _this.ticket);
        });
    }
}