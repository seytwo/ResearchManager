class FileSelector extends Button
{
    constructor(parent, name = "file", number = null)
    {
        let value = "📎";
        if (number != null)
        {
            value += "[" + number + "]";
        }
        
        super(value, parent, name);
        const _this = this;

        this.child.element.type = "file";
    }
}