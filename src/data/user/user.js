class User extends Data
{
    constructor(data, controller, icon)
    {
        super(data["id"], data, controller);

        this.controller.users.set(this.id, this);

        this.icon = icon;
    }
}