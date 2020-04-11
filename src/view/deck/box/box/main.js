class BoxMain extends Div
{
    constructor(parent, user, name = "main")
    {
        super(parent, name);
        
        this.element.style.height = "auto";
        this.element.style.display = "flex";

        this.left = new BoxLeft(this, user, this.nameid + ".left");
        this.right = new BoxRight(this, user, this.nameid + ".right");
    }
}