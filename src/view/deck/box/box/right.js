class BoxRight extends Div
{
    constructor(parent, user, name = "right")
    {
        super(parent, name);
        const _this = this;
        
        // 右側
        this.element.style.flexGrow = "1";

        this.header = new BoxHeader(this, user, this.nameid + ".header");

        this.title = new TextArea(this, 1, this.nameid + ".title");
        this.title.element.placeholder = "title";
        
        this.text = new TextArea(this, 6, this.nameid + ".text");
        this.text.element.placeholder = "text";

        this.parentBox = new BoxParent(this, this.nameid + ".parent");
    }
}