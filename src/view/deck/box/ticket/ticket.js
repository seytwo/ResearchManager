class TicketBox extends Box
{
    constructor(parent, ticket, name = "ticket", first = false)
    {
        super(parent, ticket.user, name, first);
        const _this = this;

        this.ticket = ticket;

        // チケットの内容を表示
        this.details.summary.element.innerHTML 
            = DateTime.toString(this.ticket.data.get("datetime")) 
            + " [" + this.ticket.id + "]";
        this.main.right.header.datetime.element.innerHTML 
            = DateTime.toString(this.ticket.data.get("updatetime"));
        this.main.right.title.element.value = this.ticket.data.get("title");
        this.main.right.text.element.value = this.ticket.data.get("text");
        this.main.left.typeSelector.options.get(ticket.data.get("type")).element.selected = true;
        if (this.ticket.parent != null)
        {
            this.main.right.parentBox.input.element.value = this.ticket.parent.id;
        }

        // メモ追加ボックス／タスク追加ボックスのイベントハンドラを追加
        this.main.left.addMemoButton.child.element.addEventListener("click", (event) =>
        {
            _this.parent.parent.header.addBox.main.right.parentBox.input.element.value 
                = _this.ticket.id;
        });
        this.main.left.addTaskButton.child.element.addEventListener("click", (event) =>
        {
            _this.parent.parent.header.addBox.main.right.parentBox.input.element.value 
                = _this.ticket.id;
        });

        // チケットツリー表示ボタン
        this.main.right.parentBox.button.child.element.addEventListener("click", (event) =>
        {
            console.log(_this.main.right.parentBox.button.child.nameid + ".click");
            const window = _this.parent.parent.parent;
            const column = new AncestorColumn(window, ticket, window.nameid + ".ancestorColumn");
        });

        // チケット情報の変更イベント
        this.main.right.title.element.addEventListener("keydown", (event) =>
        {
            _this.onkeydown(event);
        });
        this.main.right.text.element.addEventListener("keydown", (event) =>
        {
            _this.onkeydown(event);
        });
        this.main.right.parentBox.input.element.addEventListener("keydown", (event) =>
        {
            _this.onkeydown(event);
        });
        this.main.left.typeSelector.element.addEventListener("change", (event) =>
        {
            _this.save(event);
        });

        // 添付ファイルの追加イベント
        this.main.left.fileSelector.child.element.addEventListener("change", (event) =>
        {
            console.log("[" + _this.main.left.fileSelector.child.nameid + ".change]");
            for (const file of _this.main.left.fileSelector.child.element.files)
            {
                console.log("\t" + file.name);
                const path = Path.root() + "\\data\\ticket\\" + _this.ticket.id + "\\file\\" + file.name;
                IO.write(path, file, (error) => {});
            }
        });
    }

    static create(parent, ticket, name = "ticket", first = false)
    {
        let box = null;
        const type = ticket.data.get("type");
        if (type == "task")
        {
            box = new TaskBox(parent, ticket, name, first);
        }
        else if (type == "memo")
        {
            box = new MemoBox(parent, ticket, name, first);
        }
        else
        {
            console.error("[TicketBox.create] no type");
            box = new TicketBox(parent, ticket, name, first);
        }
        return box;
    }

    onkeydown(event)
    {
        if (event.ctrlKey && (event.keyCode == 83))
        {
            this.save(event);
        }
    }
    save(event)
    {
        if ((this.main.right.title.element.value != this.ticket.data.get("title"))
            || (this.main.right.text.element.value != this.ticket.data.get("text"))
            || (this.main.right.parentBox.input.element.value != this.ticket.data.get("parent"))
            || (this.main.left.typeSelector.get() != this.ticket.data.get("type"))
            || (this.ticket.data.get("type") == "task" 
                && this.main.left.statusSelector.get() != this.ticket.data.get("status")))
        {
            console.log("[" + this.nameid + ".save]");

            // チケット情報の変更
            const now = DateTime.now();
            this.ticket.data.set("title", this.main.right.title.element.value);
            this.ticket.data.set("text", this.main.right.text.element.value);
            this.ticket.data.set("parent", this.main.right.parentBox.input.element.value);
            this.ticket.data.set("updatetime", now);
            this.ticket.data.set("type", this.main.left.typeSelector.get());
            if (this.ticket.data.get("type") == "task")
            {
                this.ticket.data.set("status", this.main.left.statusSelector.get());
            }

            // 表示を変更
            this.main.right.header.datetime.element.innerHTML = DateTime.toString(now);

            // 保存
            const root = Path.root() + "\\data\\ticket\\" + this.ticket.id + "\\data";
            const number = Path.getAll(root).length;
            const path = root + "\\" + number + ".json";
            IO.writeJson(path, this.ticket.data, (error) => 
            {
                if (error != null)
                {
                    console.log(error);
                }
            });
            console.log(this.ticket);
        }
    }
}