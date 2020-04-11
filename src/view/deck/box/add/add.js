class AddBox extends Box
{
    constructor(parent, user, name = "addBox")
    {
        super(parent, user, name);
        const _this = this;

        this.details.summary.element.innerHTML = "add";

        this.main.left.statusSelector.element.hidden = true;
        this.main.left.showProgressButton.element.hidden = true;
        this.main.left.fileSelector.element.hidden = true;
        this.main.right.parentBox.button.element.hidden = true;

        this.main.right.text.element.addEventListener("keydown", (event) =>
        {
            if (event.ctrlKey && (event.keyCode == 13) 
                && (_this.main.right.text.element.value != ""))
            {
                console.log("[" + _this.main.right.text.nameid + ".save]");

                const root = Path.root() + "\\data\\ticket";
                const id = Path.getAll(root).length;
                const path = root + "\\" + ("00000000" + id).slice(-8);

                // データ
                const now = DateTime.now();
                const data =
                {
                    datetime: now,
                    updatetime: now,
                    type: _this.main.left.typeSelector.get(),
                    title: _this.main.right.title.element.value,
                    user: _this.user.data.get("id"),
                    parent: _this.main.right.parentBox.input.element.value,
                    text: _this.main.right.text.element.value
                }
                if (_this.main.left.typeSelector.get() == "task")
                {
                    data["status"] = "start";
                }

                // チケット追加
                const ticket = Ticket.create(id, data["type"], data, _this.parent.parent.parent.controller);
                const box = TicketBox.create(_this.parent.parent.main, ticket, "box", true);

                // リセット
                _this.main.right.title.element.value = "";
                _this.main.right.parentBox.input.element.value = _this.parent.parent.getDefaultParent();
                _this.main.right.text.element.value = "";

                // ディレクトリ作成
                IO.mkdir(path, (error) =>
                {
                    IO.mkdir(path + "\\data", (error) =>
                    {
                        // 保存
                        IO.writeJson(path + "\\data\\0.json", ticket.data, (error) => {});
                    });

                    IO.mkdir(path + "\\file", (error) => {});
                });
            }
        });
    }
}