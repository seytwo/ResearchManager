class ProgressColumn extends AncestorColumn
{
    constructor(parent, task, name = "progressColumn")
    {
        super(parent, task, name);
        const _this = this;

        this.task = task;
        
        this.header.title.element.innerHTML = "progress";

        // タスクボックス
        this.header.taskBox = new TaskBox(this.header, this.task, this.nameid + ".taskBox");
        this.header.taskBox.main.left.showProgressButton.element.hidden = true;
        this.header.taskBox.details.element.addEventListener("toggle", (event) =>
        {
            console.log("[" + _this.header.taskBox.nameid + ".toggle]");
            _this.main.resize();
        });
    }
}