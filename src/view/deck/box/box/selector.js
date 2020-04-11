class Selector extends Element
{
    constructor(valueIcons, parent, name = "selector")
    {
        super("select", parent, name);
        
        this.options = new Map();
        for (const [value, icon] of valueIcons)
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
        return options.filter((option) => option.element.selected)[0].value;
    }
}