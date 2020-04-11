class Controller
{
    constructor()
    {
        this.users = new Map();
        this.setUsers();

        this.tickets = new Map();
        this.setTickets();

        console.log(this);
    }

    setUsers()
    {
        const root = Path.root() + "\\data\\user";
        for (const id of Path.getAll(root))
        {
            const path = root + "\\" + id;
            const data = IO.readJson(path + "\\data.json");
            const icon = path + "\\icon.png";
            const user = new User(data, this, icon);
        }
    }

    setTickets()
    {
        const root = Path.root();
        const ids = Path.getAll(root + "\\data\\ticket");
        for (const id of ids)
        {
            const data = IO.readJson(Path.getLatest(root + "\\data\\ticket\\" + id + "\\data"));
            const ticket = Ticket.create(id, data["type"], data, this);
        }
    }
}