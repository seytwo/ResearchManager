class Window extends Div
{
    constructor(controller, parent, name = "window")
    {
        super(parent, name);

        this.controller = controller;

        this.deckWindow = new DeckWindow(controller, this);
    }
}