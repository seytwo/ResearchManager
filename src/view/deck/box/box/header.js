class BoxHeader extends Div
{
    constructor(parent, user, name = "header")
    {
        super(parent, name);

        this.element.style.display = "flex";

        this.userDiv = new Div(this, this.nameid + ".userdiv");
        this.user = new Element("font", this.userDiv, this.userDiv.nameid + ".user");
        this.user.element.size = "1";
        this.user.element.innerHTML = user.data.get("name") + "@" + user.data.get("id");

        this.datetimeDiv = new Div(this, this.nameid + ".datetimediv");
        this.datetime = new Element("font", this.datetimeDiv, this.datetimeDiv.nameid + ".datetime");
        this.datetime.element.size = "1";
    }
}