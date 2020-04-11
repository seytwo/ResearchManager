class Box extends Div
{
    constructor(parent, user, name = "", first = false)
    {
        super(parent, name, first);

        this.user = user;

        this.element.style.width = "300px";
        this.element.style.height = "auto";
        
        // 詳細
        this.details = new Details(this, this.nameid + ".details");
        this.details.element.style.height = "auto";
        
        // 概要
        this.details.summary.element.style.height = "auto";
        this.details.summary.element.innerHTML = "box";
        this.details.element.open = true;

        // メイン
        this.main = new BoxMain(this.details, user, this.nameid + ".main");

        // console.log(this);
    }
}