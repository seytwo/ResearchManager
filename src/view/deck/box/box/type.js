class TypeSelector extends Selector
{
    constructor(parent, name = "timeselector")
    {
        super("select", parent, name);

        this.options = new Map();
        for (const [value, icon] of [["memo", "💬"], ["task", "💼"]])
        {
            const option = new Element("option", this, this.nameid + "." + value);
            option.value = value;
            option.appendElement(icon);
            this.options.set(value, option);
        }
    }

    get()
    {
        const options = Array.from(this.options.values());
        return options.filter((element) => element.selected)[0].value;
    }
}