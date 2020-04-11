class BoxLeft extends Div
{
    constructor(parent, user, name = "left")
    {
        super(parent, name);

        this.user = user;

        this.element.style.width = "auto";
        this.element.style.textAlign = "center";

        // アイコン
        this.icon = new Icon(this, this.user.icon, this.nameid + ".icon");
        this.icon.element.style.width = "50px";
        this.icon.element.style.borderRadius = "50%";

        this.appendElement("<br>");
        
        // タイプ選択
        this.typeSelector = new Selector(
            [["memo", "💬"], ["task", "💼"]], 
            this, this.nameid + ".selector"
        );

        this.appendElement("<br>");

        // メモ追加ボタン
        this.addMemoButton = new AddTypeButton(
            "memo", "💬", this, this.nameid + ".addMemoButton"
        );

        // タスク追加ボタン
        this.addTaskButton = new AddTypeButton(
            "task", "💼", this, this.nameid + ".addTaskButton"
        );
        
        this.appendElement("<br>");

        // タイプ選択
        this.statusSelector = new Selector(
            [["start", "S"], ["now", "-"], ["end", "E"]], 
            this, this.nameid + ".selector"
        );

        // 進捗カラムボタン
        this.showProgressButton = new ShowProgressButton(
            this, this.nameid + ".showProgressButton"
        );

        this.appendElement("<br>");

        // ファイル選択ボタン
        this.fileSelector = new FileSelector(
            this, this.nameid + ".fileSelector"
        );
    }
}