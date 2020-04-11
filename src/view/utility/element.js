let ELEMENT_ID = 0;
class Element
{
    constructor(type, parent, name = "element", first = false)
    {
        this.id = ELEMENT_ID;
        ELEMENT_ID++;
        
        this.type = type;
        this.parent = parent;
        this.name = name;

        this.nameid = this.name + "[" + this.id + "]";

        this.element = document.createElement(this.type);
        this.element.id = this.name + "[" + this.id + "]";

        if (first)
        {
            this.parent.element.insertBefore(this.element, this.parent.element.firstChild);
        }
        else
        {
            this.parent.element.appendChild(this.element);
        }

        // console.log(this);
    }

    appendElement(target)
    {
        this.element.insertAdjacentHTML("beforeend", target);
    }

    getCustomEvent(type, detail = null)
    {
        return new CustomEvent(
            this.getCustomEventType(type), 
            {detail: detail}
        );
    }
    getCustomEventType(type)
    {
        return type + "[" + this.id + "]";
    }
}