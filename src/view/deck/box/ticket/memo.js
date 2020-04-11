class MemoBox extends TicketBox
{
    constructor(parent, ticket, name = "memobox", first = false)
    {
        super(parent, ticket, name, first);

        this.main.left.statusSelector.element.hidden = true;
        this.main.left.showProgressButton.element.hidden = true;
    }
}